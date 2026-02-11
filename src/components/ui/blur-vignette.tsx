"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BlurVignetteProps {
    children: React.ReactNode;
    classname?: string;
    radius?: string;
    inset?: string;
    transitionLength?: string;
    blur?: string;
}

export const BlurVignette = ({
    children,
    classname,
    radius = "24px",
    inset = "20px",
    transitionLength = "44px",
    blur = "6px",
}: BlurVignetteProps) => {
    return (
        <div
            className={cn("relative overflow-hidden", classname)}
            style={
                {
                    "--radius": radius,
                    "--inset": inset,
                    "--transition-length": transitionLength,
                    "--blur": blur,
                    borderRadius: radius,
                    isolation: "isolate",
                } as React.CSSProperties
            }
        >
            {children}
        </div>
    );
};

export const BlurVignetteArticle = ({
    children,
    classname,
}: {
    children?: React.ReactNode;
    classname?: string;
}) => {
    return (
        <div
            className={cn(
                "pointer-events-none absolute inset-0 z-10",
                classname
            )}
            style={{
                backdropFilter: "blur(var(--blur))",
                WebkitBackdropFilter: "blur(var(--blur))",
                "--r": "max(var(--transition-length), calc(var(--radius) - var(--inset)))",
                "--corner-size": "calc(var(--r) + var(--inset)) calc(var(--r) + var(--inset))",
                "--corner-gradient": "transparent 0px, transparent calc(var(--r) - var(--transition-length)), black var(--r)",
                "--fill-gradient": "black, black var(--inset), transparent calc(var(--inset) + var(--transition-length)), transparent calc(100% - var(--transition-length) - var(--inset)), black calc(100% - var(--inset))",
                "--fill-narrow-size": "calc(100% - (var(--inset) + var(--r)) * 2)",
                "--fill-farther-position": "calc(var(--inset) + var(--r))",
                WebkitMaskImage: `
          linear-gradient(to right, var(--fill-gradient)), 
          linear-gradient(to bottom, var(--fill-gradient)), 
          radial-gradient(at bottom right, var(--corner-gradient)), 
          radial-gradient(at bottom left, var(--corner-gradient)), 
          radial-gradient(at top left, var(--corner-gradient)), 
          radial-gradient(at top right, var(--corner-gradient))
        `,
                maskImage: `
          linear-gradient(to right, var(--fill-gradient)), 
          linear-gradient(to bottom, var(--fill-gradient)), 
          radial-gradient(at bottom right, var(--corner-gradient)), 
          radial-gradient(at bottom left, var(--corner-gradient)), 
          radial-gradient(at top left, var(--corner-gradient)), 
          radial-gradient(at top right, var(--corner-gradient))
        `,
                WebkitMaskSize: `
          100% var(--fill-narrow-size), 
          var(--fill-narrow-size) 100%, 
          var(--corner-size), 
          var(--corner-size), 
          var(--corner-size), 
          var(--corner-size)
        `,
                maskSize: `
          100% var(--fill-narrow-size), 
          var(--fill-narrow-size) 100%, 
          var(--corner-size), 
          var(--corner-size), 
          var(--corner-size), 
          var(--corner-size)
        `,
                WebkitMaskPosition: `
            0 var(--fill-farther-position), 
            var(--fill-farther-position) 0, 
            0 0, 
            100% 0, 
            100% 100%, 
            0 100%
        `,
                maskPosition: `
            0 var(--fill-farther-position), 
            var(--fill-farther-position) 0, 
            0 0, 
            100% 0, 
            100% 100%, 
            0 100%
        `,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                borderRadius: "var(--radius)",
                isolation: "isolate",
            } as React.CSSProperties}
        >
            {children}
        </div>
    );
};
