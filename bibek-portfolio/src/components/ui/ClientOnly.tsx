"use client";

import { useEffect, useState } from "react";

/**
 * Only render children after component has mounted on client.
 * Prevents hydration errors with framer-motion and other client-only libraries.
 */
export function ClientOnly({ children }: { children: React.ReactNode }) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    // Return null on server and first render
    if (!hasMounted) {
        return null;
    }

    return <>{children}</>;
}
