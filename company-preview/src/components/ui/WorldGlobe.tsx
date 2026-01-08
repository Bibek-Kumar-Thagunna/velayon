"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useState, useCallback } from "react";

function cn(...inputs: (string | undefined | null | false)[]) {
    return inputs.filter(Boolean).join(" ");
}

export function WorldGlobe({ className }: { className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
    const [size, setSize] = useState(0);

    // ResizeObserver - use container width as the sole dimension for a perfect square
    useEffect(() => {
        if (!containerRef.current) return;

        const updateSize = () => {
            if (containerRef.current) {
                // Use width as the reference for a perfect square
                const width = containerRef.current.offsetWidth;
                if (width > 0) {
                    setSize(width);
                }
            }
        };

        // Immediate check
        updateSize();

        // Small delay check (fixes some production hydration races)
        setTimeout(updateSize, 100);

        const resizeObserver = new ResizeObserver(updateSize);
        resizeObserver.observe(containerRef.current);

        return () => resizeObserver.disconnect();
    }, []);

    // Initialize globe when size is known
    useEffect(() => {
        if (size === 0 || !canvasRef.current) return;

        // Destroy existing globe instance
        if (globeRef.current) {
            globeRef.current.destroy();
        }

        let phi = 0;
        const isMobile = size < 400;

        globeRef.current = createGlobe(canvasRef.current, {
            devicePixelRatio: Math.min(window.devicePixelRatio, 2),
            width: size * 2,  // Always square
            height: size * 2, // Always square
            phi: 0,
            theta: 0.25,
            dark: 1,
            diffuse: 1.2,
            mapSamples: isMobile ? 8000 : 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                { location: [28.6139, 77.209], size: 0.08 },
                { location: [27.7172, 85.324], size: 0.08 },
                { location: [37.7749, -122.4194], size: 0.05 },
                { location: [40.7128, -74.006], size: 0.05 },
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += isMobile ? 0.002 : 0.003;
            },
        });

        return () => {
            if (globeRef.current) {
                globeRef.current.destroy();
                globeRef.current = null;
            }
        };
    }, [size]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative w-full aspect-square flex items-center justify-center",
                className
            )}
        >
            {/* Canvas is always a perfect square based on container width */}
            <canvas
                ref={canvasRef}
                width={size * 2}
                height={size * 2}
                style={{
                    width: size,
                    height: size,
                }}
                className="block"
            />
        </div>
    );
}
