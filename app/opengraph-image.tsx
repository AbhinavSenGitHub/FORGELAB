import { ImageResponse } from "next/og";

// The preview shown when abhinavsen.com is shared (LinkedIn, WhatsApp, X, Slack…).
export const alt = "Abhinav Sen — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "radial-gradient(ellipse 60% 70% at 85% 10%, rgba(255,106,61,0.28), transparent), #0a0a0b",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 18, height: 18, borderRadius: 9, background: "linear-gradient(135deg,#ffb347,#ff6a3d,#ff3d77)" }} />
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
            Abhinav<span style={{ color: "#ff6a3d", marginLeft: 10 }}>Sen</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 26, letterSpacing: 6, color: "#ff8a5c", textTransform: "uppercase" }}>Full-Stack Developer</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2 }}>
            <span>I build premium</span>
            <span>digital products.</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#94a3b8" }}>
          Web · Mobile · Desktop — React Native, Next.js, Rust · Maker of WorkOS
        </div>
      </div>
    ),
    size,
  );
}
