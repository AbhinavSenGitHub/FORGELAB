"use client";

import React, { useEffect, useRef, useState } from "react";

/*
 * The real, interactive WorkOS island demo from the WorkOS site
 * (/workos/embed/demo, served here through the /workos rewrite). Clicks stay
 * inside the demo; only the section's Explore / Download links leave the page.
 * The embed reports its height so the frame fits without scrolling.
 */
export default function WorkOSDemo() {
  const frame = useRef<HTMLIFrameElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(620);
  const [loaded, setLoaded] = useState(false);
  // The demo is a whole app: load it only when the visitor scrolls near it,
  // so it never slows down the first view of the page.
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.source !== frame.current?.contentWindow) return;
      const data = e.data as { type?: string; height?: number };
      if (data?.type === "workos-embed-height" && typeof data.height === "number" && data.height > 100) {
        setHeight(Math.min(data.height, 1400));
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div ref={box} className="relative w-full" style={{ height }}>
      {!loaded && (
        <div className="absolute inset-0 rounded-[28px] border border-emerald-400/20 bg-[#050806] animate-pulse" aria-hidden="true" />
      )}
      {near && (
        <iframe
          ref={frame}
          src="/workos/embed/demo"
          title="WorkOS interactive demo"
          onLoad={() => setLoaded(true)}
          className="w-full h-full border-0 bg-transparent"
          style={{ colorScheme: "dark", opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
        />
      )}
    </div>
  );
}
