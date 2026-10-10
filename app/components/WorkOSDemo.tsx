"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
 * A live, simplified WorkOS: the notch at the top shows the active workspace
 * and its apps; the "desktop" below shows only that workspace's windows.
 * Tabs switch workspaces (click, or it cycles by itself until you do).
 */

type App = { name: string; short: string; color: string; detail: string };
type Workspace = { name: string; apps: App[] };

const VS = { name: "VS Code", short: "VS", color: "#2f80ed" };
const CH = { name: "Chrome", short: "Ch", color: "#e8b83a" };
const TERM = { name: "Terminal", short: ">_", color: "#3b4252" };

const WORKSPACES: Workspace[] = [
  {
    name: "Acme",
    apps: [
      { ...VS, detail: "acme-api" },
      { ...CH, detail: "Acme dashboard" },
      { ...TERM, detail: "npm run dev" },
      { name: "Postman", short: "Po", color: "#ef6c3c", detail: "Orders API" },
      { name: "Figma", short: "Fi", color: "#a259ff", detail: "Checkout v2" },
      { name: "Slack", short: "Sl", color: "#4a154b", detail: "#acme-dev" },
    ],
  },
  {
    name: "Personal",
    apps: [
      { ...VS, detail: "portfolio" },
      { name: "Spotify", short: "Sp", color: "#1db954", detail: "Deep Focus" },
      { name: "Notion", short: "No", color: "#5b5b5b", detail: "Side projects" },
      { ...CH, detail: "YouTube" },
    ],
  },
  {
    name: "Client B",
    apps: [
      { name: "Cursor", short: "Cu", color: "#111827", detail: "clientb-web" },
      { name: "pgAdmin", short: "pg", color: "#336791", detail: "clientb_prod" },
      { ...CH, detail: "Client B profile" },
      { ...TERM, detail: "~/clientb" },
      { name: "Explorer", short: "Ex", color: "#d9a43a", detail: "Designs" },
    ],
  },
];

const CYCLE_MS = 3200;

function Tile({ app, size = 22 }: { app: Pick<App, "short" | "color" | "name">; size?: number }) {
  return (
    <span
      title={app.name}
      className="inline-flex items-center justify-center rounded-md font-bold text-white shrink-0"
      style={{ width: size, height: size, background: app.color, fontSize: size * 0.42 }}
    >
      {app.short}
    </span>
  );
}

export default function WorkOSDemo() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!auto || hovered) return;
    const id = setInterval(() => setActive((i) => (i + 1) % WORKSPACES.length), CYCLE_MS);
    return () => clearInterval(id);
  }, [auto, hovered]);

  const ws = WORKSPACES[active];
  const pick = (i: number) => {
    setActive(i);
    setAuto(false); // the user took over
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full rounded-[2.5rem] overflow-hidden ring-1 ring-emerald-400/20 shadow-[0_30px_80px_-30px_rgba(52,211,153,0.35)] p-6 md:p-10"
      style={{ background: "radial-gradient(ellipse 70% 60% at 70% 30%, rgba(16,185,129,0.14), transparent), #050806" }}
    >
      {/* brand */}
      <div className="flex items-center justify-between gap-4 mb-6 md:mb-8">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl border border-white/15 bg-white/[0.04] flex items-center justify-center text-emerald-400 font-semibold">
            W
          </span>
          <span className="text-white text-lg font-medium">WorkOS</span>
        </div>
        <span className="hidden sm:inline text-[11px] font-mono tracking-[0.2em] uppercase text-emerald-400/80">Live demo</span>
      </div>

      {/* the notch */}
      <div className="flex justify-center mb-6">
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/70 px-4 py-2 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={ws.name}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="text-white text-sm font-medium"
            >
              {ws.name}
            </motion.span>
          </AnimatePresence>
          <div className="flex items-center gap-1">
            {ws.apps.slice(0, 4).map((a) => (
              <motion.span key={`${ws.name}-${a.name}-${a.detail}`} layout initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <Tile app={a} size={18} />
              </motion.span>
            ))}
            {ws.apps.length > 4 && <span className="text-[11px] text-slate-400 font-mono ml-1">+{ws.apps.length - 4}</span>}
          </div>
        </motion.div>
      </div>

      {/* the desktop: only this workspace's windows */}
      <div className="relative rounded-3xl border border-white/10 bg-black/40 p-3 md:p-4 min-h-[230px] md:min-h-[260px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={ws.name}
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
            initial="hidden"
            animate="shown"
            exit="gone"
            variants={{ shown: { transition: { staggerChildren: 0.05 } } }}
          >
            {ws.apps.map((a) => (
              <motion.div
                key={`${a.name}-${a.detail}`}
                variants={{
                  hidden: { opacity: 0, y: 14, scale: 0.96 },
                  shown: { opacity: 1, y: 0, scale: 1 },
                  gone: { opacity: 0, scale: 0.94, transition: { duration: 0.15 } },
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-3 flex flex-col gap-3"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Tile app={a} />
                  <div className="min-w-0">
                    <p className="text-white text-xs font-semibold truncate">{a.name}</p>
                    <p className="text-slate-500 text-[11px] truncate">{a.detail}</p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-1.5 rounded-full bg-white/10 w-full" />
                  <div className="h-1.5 rounded-full bg-white/[0.07] w-4/5" />
                  <div className="h-1.5 rounded-full w-1/3" style={{ background: a.color, opacity: 0.6 }} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* workspace tabs */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Workspaces">
        {WORKSPACES.map((w, i) => (
          <button
            key={w.name}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => pick(i)}
            className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              i === active ? "text-slate-950" : "text-slate-300 hover:text-white bg-white/[0.04] border border-white/10"
            }`}
          >
            {i === active && (
              <motion.span
                layoutId="workos-tab"
                className="absolute inset-0 rounded-full bg-emerald-400"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative">{w.name}</span>
          </button>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-slate-500">
        Switching hides the other workspaces&apos; apps — nothing is closed.
      </p>
    </div>
  );
}
