"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";

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
                const width = containerRef.current.offsetWidth;
                // console.log("Globe Check Width:", width);
                if (width > 0) {
                    setSize(width);
                }
            }
        };

        // 1. Immediate check
        updateSize();

        // 2. Multi-stage polling to catch layout settling/animations
        // This is crucial for fixing cases where the component mounts before layout is ready
        const timeouts = [
            setTimeout(updateSize, 100),
            setTimeout(updateSize, 500),
            setTimeout(updateSize, 1000),
            setTimeout(updateSize, 2000),
        ];

        const resizeObserver = new ResizeObserver(updateSize);
        resizeObserver.observe(containerRef.current);

        return () => {
            resizeObserver.disconnect();
            timeouts.forEach(clearTimeout);
        };
    }, []);

    // Initialize globe when size is known
    useEffect(() => {
        if (size === 0 || !canvasRef.current) return;

        // Destroy existing globe instance
        if (globeRef.current) {
            try {
                globeRef.current.destroy();
            } catch (e) {
                // ignore
            }
        }

        let phi = 0;

        try {
            globeRef.current = createGlobe(canvasRef.current, {
                devicePixelRatio: 2,
                width: size * 2,
                height: size * 2,
                phi: 0,
                theta: 0.25,
                dark: 1,
                diffuse: 1.2,
                mapSamples: 10000,
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
                    phi += 0.003;
                },
            });
        } catch (error) {
            // ignore
        }

        return () => {
            if (globeRef.current) {
                try {
                    globeRef.current.destroy();
                    globeRef.current = null;
                } catch (e) {
                    // ignore
                }
            }
        };
    }, [size]);

    return (
        <div
            ref={containerRef}
            suppressHydrationWarning
            className={cn(
                "relative w-full aspect-square flex items-center justify-center",
                className
            )}
        >
            {/* Canvas is always a perfect square based on container width */}
            <canvas
                key={size} // FORCE REMOUNT on size change to ensure fresh WebGL context
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
