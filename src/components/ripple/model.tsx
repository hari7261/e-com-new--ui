'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useFBO, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import useMouse from '@/hooks/useMouse';
import useDimension from '@/hooks/useDimension';
import { vertex, fragment } from './shaders';

export default function Model() {
    const { viewport } = useThree();
    const brushTexture = useTexture('/brush.png');
    const texture1 = useTexture('/images/3d-model-1.jpg');
    const texture2 = useTexture('/images/3d-model-2.jpg');
    const texture3 = useTexture('/images/3d-model-3.jpg');

    const meshRefs = useRef<THREE.Mesh[]>([]);
    const [meshes, setMeshes] = useState<React.ReactNode[]>([]);
    const mouse = useMouse();
    const device = useDimension();
    const [prevMouse, setPrevMouse] = useState({ x: 0, y: 0 });
    const [currentWave, setCurrentWave] = useState(0);
    const { gl, camera } = useThree();

    const scene = useRef(new THREE.Scene()).current;
    const max = 50; // Optimized from 100

    const uniforms = useRef({
        uDisplacement: { value: null as THREE.Texture | null },
        uTexture: { value: null as THREE.Texture | null },
        winResolution: {
            value: new THREE.Vector2(0, 0),
        },
    });

    const fboBase = useFBO(device.width || 1, device.height || 1);
    const fboTexture = useFBO(device.width || 1, device.height || 1);

    const { scene: imageScene, camera: imageCamera } = React.useMemo(() => Images(viewport, texture1, texture2, texture3), [viewport, texture1, texture2, texture3]);

    useEffect(() => {
        const generatedMeshes = Array.from({ length: max }).map((_, i) => (
            <mesh
                key={i}
                position={[0, 0, 0]}
                ref={(el) => {
                    if (el) meshRefs.current[i] = el;
                }}
                rotation={[0, 0, Math.random()]}
                visible={false}
            >
                <planeGeometry args={[60, 60, 1, 1]} />
                <meshBasicMaterial transparent={true} map={brushTexture} />
            </mesh>
        ));
        setMeshes(generatedMeshes);
    }, [brushTexture]);

    function setNewWave(x: number, y: number, index: number) {
        const mesh = meshRefs.current[index];
        if (mesh) {
            mesh.position.x = x;
            mesh.position.y = y;
            mesh.visible = true;
            (mesh.material as THREE.MeshBasicMaterial).opacity = 1;
            mesh.scale.set(1.75, 1.75, 1);
        }
    }

    function trackMousePos(x: number, y: number) {
        if (Math.abs(x - prevMouse.x) > 0.1 || Math.abs(y - prevMouse.y) > 0.1) {
            const nextWave = (currentWave + 1) % max;
            setCurrentWave(nextWave);
            setNewWave(x, y, nextWave);
        }
        setPrevMouse({ x, y });
    }

    useFrame((state) => {
        const { gl, scene: finalScene } = state;
        const x = mouse.x - (device.width / 2);
        const y = -mouse.y + (device.height / 2);

        // Scale coordinates to fit the actual canvas position if needed
        // But for full-screen it's fine.

        trackMousePos(x, y);

        meshRefs.current.forEach((mesh) => {
            if (mesh && mesh.visible) {
                mesh.rotation.z += 0.025;
                (mesh.material as THREE.MeshBasicMaterial).opacity *= 0.95;
                mesh.scale.x = 0.98 * mesh.scale.x + 0.155;
                mesh.scale.y = 0.98 * mesh.scale.y + 0.155;
                if ((mesh.material as THREE.MeshBasicMaterial).opacity < 0.01) {
                    mesh.visible = false;
                }
            }
        });

        if (device.width > 0 && device.height > 0) {
            gl.setRenderTarget(fboBase);
            gl.clear();
            meshRefs.current.forEach((mesh) => {
                if (mesh && mesh.visible) {
                    scene.add(mesh);
                }
            });
            gl.render(scene, camera);
            meshRefs.current.forEach((mesh) => {
                if (mesh) {
                    scene.remove(mesh);
                }
            });

            uniforms.current.uTexture.value = fboTexture.texture;

            gl.setRenderTarget(fboTexture);
            gl.render(imageScene, imageCamera);
            uniforms.current.uDisplacement.value = fboBase.texture;

            gl.setRenderTarget(null);
            gl.render(finalScene, camera);

            uniforms.current.winResolution.value.set(
                device.width * device.pixelRatio,
                device.height * device.pixelRatio
            );
        }
    }, 1);

    function Images(viewport: any, t1: THREE.Texture, t2: THREE.Texture, t3: THREE.Texture) {
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(
            viewport.width / -2,
            viewport.width / 2,
            viewport.height / 2,
            viewport.height / -2,
            -1000,
            1000
        );
        camera.position.z = 2;

        const geometry = new THREE.PlaneGeometry(1, 1);
        const group = new THREE.Group();

        const imageWidth = viewport.width / 5;
        const imageHeight = (viewport.width / 5) * 1.25;

        const img1 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: t1 }));
        img1.position.set(-0.25 * viewport.width, 0, 1);
        img1.scale.set(imageWidth, imageHeight, 1);
        group.add(img1);

        const img2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: t2 }));
        img2.position.set(0, 0, 1);
        img2.scale.set(imageWidth, imageHeight, 1);
        group.add(img2);

        const img3 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: t3 }));
        img3.position.set(0.25 * viewport.width, 0, 1);
        img3.scale.set(imageWidth, imageHeight, 1);
        group.add(img3);

        scene.add(group);
        return { scene, camera };
    }

    return (
        <group>
            {meshes}
            <mesh>
                <planeGeometry args={[device.width, device.height, 1, 1]} />
                <shaderMaterial
                    vertexShader={vertex}
                    fragmentShader={fragment}
                    transparent={true}
                    uniforms={uniforms.current}
                />
            </mesh>
        </group>
    );
}
