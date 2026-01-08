"use client";

import { useEffect, useRef } from "react";

export function GlobalGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        // Globe Config
        const globeRadius = 250;
        const dotsCount = 400;
        let rotation = 0;
        const dots: { lat: number; lon: number }[] = [];

        // Init Dots (Fibonacci Sphere)
        const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
        for (let i = 0; i < dotsCount; i++) {
            const y = 1 - (i / (dotsCount - 1)) * 2; // y goes from 1 to -1
            const radius = Math.sqrt(1 - y * y);
            const theta = phi * i;

            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;

            // Convert to lat/lon for easy rotation
            // Actually, let's keep x,y,z base and rotate them
            // Store as spherical coordinates
            dots.push({
                lat: Math.acos(y),
                lon: theta
            });
        }

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            rotation += 0.002;

            ctx.fillStyle = "rgba(100, 100, 100, 0.8)";

            dots.forEach((dot) => {
                // Spherical to Cartesian with rotation
                const lat = dot.lat;
                const lon = dot.lon + rotation;

                const y = Math.cos(lat) * globeRadius;
                const r = Math.sin(lat) * globeRadius;
                const x = Math.cos(lon) * r;
                const z = Math.sin(lon) * r;

                // Project 3D to 2D
                // Simple perspective projection
                const scale = 1000 / (1000 - z);
                const px = cx + x * scale;
                const py = cy + y * scale;

                // Opacity based on Z (depth)
                // Front dots = 1, back dots = 0.1
                const alpha = (z + globeRadius) / (2 * globeRadius);

                // Only draw size > 0 and alpha > 0
                if (scale > 0) {
                    ctx.beginPath();
                    const size = 1.5 * scale;
                    ctx.arc(px, py, size, 0, Math.PI * 2);

                    // Color: Amber for Velayon accent? Or just white/grey?
                    // Let's use clean white/grey for "Industrial"
                    ctx.fillStyle = `rgba(200, 200, 200, ${alpha * 0.8})`;
                    ctx.fill();
                }
            });

            // Draw "Rings" or lines?
            // Connecting lines is expensive O(N^2), let's stick to dots for "Matrix" look (Neural Grid)

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen"
        />
    );
}
