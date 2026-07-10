import { ImageResponse } from "next/og";
import { SITE } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #080f16 0%, #0e1620 60%, #08131f 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "#0687ff",
            opacity: 0.25,
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "#22d3ee",
            opacity: 0.2,
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#0687ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
              color: "white",
            }}
          >
            P
          </div>
          <span style={{ fontSize: 28, color: "#94a3b8", fontWeight: 600 }}>
            piusnyika.co.zw
          </span>
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, color: "#f2f6fb", display: "flex" }}>
          {SITE.name}
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#0687ff",
            fontWeight: 600,
            marginTop: 12,
            display: "flex",
          }}
        >
          {SITE.role}
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#94a3b8",
            marginTop: 24,
            display: "flex",
          }}
        >
          Building fast, accessible, modern web experiences
        </div>
      </div>
    ),
    { ...size }
  );
}
