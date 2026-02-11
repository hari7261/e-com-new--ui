'use client';

import { cn } from '@/lib/utils';
import NumberFlow from '@number-flow/react';
import { Minus, Plus } from 'lucide-react';
import * as React from 'react';

type Props = {
    value?: number;
    min?: number;
    max?: number;
    className?: string;
    onChange?: (value: number) => void;
};

export function NumberInput({
    value = 0,
    min = -Infinity,
    max = Infinity,
    className,
    onChange,
}: Props) {
    const defaultValue = React.useRef(value);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [animated, setAnimated] = React.useState(true);
    const [showCaret, setShowCaret] = React.useState(true);

    const handleInput: React.FormEventHandler<HTMLInputElement> = ({
        currentTarget: el,
    }) => {
        setAnimated(false);
        let next = value;
        if (el.value === '') {
            next = defaultValue.current;
        } else {
            const num = el.valueAsNumber;
            if (!isNaN(num) && min <= num && num <= max) next = num;
        }
        el.value = String(next);
        onChange?.(next);
    };

    const handlePointerDown =
        (diff: number) => (event: React.PointerEvent<HTMLButtonElement>) => {
            setAnimated(true);
            if (event.pointerType === 'mouse') {
                event?.preventDefault();
                inputRef.current?.focus();
            }
            const newVal = Math.min(Math.max(value + diff, min), max);
            onChange?.(newVal);
        };

    return (
        <div
            className={cn(
                'group flex h-9 w-fit items-center justify-between overflow-hidden rounded-full border border-purple-500 bg-gradient-to-r from-purple-600 to-purple-700 p-0.5 shadow-lg transition-all',
                className
            )}
        >
            <button
                aria-hidden="true"
                tabIndex={-1}
                className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-all hover:bg-white/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={min != null && value <= min}
                onPointerDown={handlePointerDown(-1)}
            >
                <Minus className="size-4" strokeWidth={3} />
            </button>

            <div className="relative grid min-w-[2rem] items-center justify-items-center text-center [grid-template-areas:'overlap'] *:[grid-area:overlap]">
                <input
                    ref={inputRef}
                    className={cn(
                        showCaret ? 'caret-white' : 'caret-transparent',
                        'spin-hide w-full bg-transparent text-center font-semibold text-transparent outline-none'
                    )}
                    style={{ fontKerning: 'none' }}
                    type="number"
                    min={min}
                    step={1}
                    autoComplete="off"
                    inputMode="numeric"
                    max={max}
                    value={value}
                    onInput={handleInput}
                />
                <NumberFlow
                    value={value}
                    locales="en-US"
                    format={{ useGrouping: false }}
                    aria-hidden="true"
                    animated={animated}
                    onAnimationsStart={() => setShowCaret(false)}
                    onAnimationsFinish={() => setShowCaret(true)}
                    className="pointer-events-none font-bold text-white"
                    willChange
                />
            </div>

            <button
                aria-hidden="true"
                tabIndex={-1}
                className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-all hover:bg-white/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={max != null && value >= max}
                onPointerDown={handlePointerDown(1)}
            >
                <Plus className="size-4" strokeWidth={3} />
            </button>
        </div>
    );
}
