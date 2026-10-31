import { useEffect, useRef, useState } from 'react';
import './style.css';

// Image that reserves its space up front (no layout jump), shows a tiny blurred
// placeholder instantly, then fades the real image in once it has decoded.
export default function SmartImage({ src, lqip, alt, ratio, className = '', priority = false, position }) {
    const imgRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
        const img = imgRef.current;
        // Already in the browser cache: skip the fade entirely.
        if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
    }, [src]);

    return (
        <div
            className={`smartImage ${loaded ? 'isLoaded' : ''} ${className}`}
            style={{
                aspectRatio: ratio,
                backgroundImage: lqip ? `url(${lqip})` : undefined,
            }}
        >
            <img
                ref={imgRef}
                src={src}
                alt={alt}
                loading={priority ? 'eager' : 'lazy'}
                fetchpriority={priority ? 'high' : 'auto'}
                decoding="async"
                draggable="false"
                style={position ? { objectPosition: position } : undefined}
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}
