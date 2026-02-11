'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    href?: string;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
    ({ className, children, href, ...props }, ref) => {
        if (href) {
            return (
                <a
                    href={href}
                    className={cn(
                        'group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-purple-600 to-purple-700 px-8 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-purple-500 hover:to-purple-600 disabled:opacity-50 disabled:pointer-events-none',
                        className
                    )}
                    {...(props as any)}
                >
                    <span className='relative inline-flex overflow-hidden items-center gap-2'>
                        <div className='translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[150%] group-hover:skew-y-12 flex items-center gap-2'>
                            {children}
                        </div>
                        <div className='absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 flex items-center gap-2'>
                            {children}
                        </div>
                    </span>
                </a>
            );
        }
        return (
            <button
                ref={ref}
                className={cn(
                    'group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-purple-600 to-purple-700 px-8 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-purple-500 hover:to-purple-600 disabled:opacity-50 disabled:pointer-events-none',
                    className
                )}
                {...props}
            >
                <span className='relative inline-flex overflow-hidden items-center gap-2'>
                    <div className='translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[150%] group-hover:skew-y-12 flex items-center gap-2'>
                        {children}
                    </div>
                    <div className='absolute translate-y-[150%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 flex items-center gap-2'>
                        {children}
                    </div>
                </span>
            </button>
        );
    }
);

AnimatedButton.displayName = 'AnimatedButton';

export { AnimatedButton };
