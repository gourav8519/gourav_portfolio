import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gourav Sahu — Full Stack MERN Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Gradient orb */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #3b82f6, #7c3aed)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "28px",
              fontWeight: 800,
            }}
          >
            G
          </div>
          <span
            style={{
              color: "#94a3b8",
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            gouravsahu.dev
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "white",
            margin: "0 0 10px 0",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          Gourav Sahu
        </h1>

        {/* Title */}
        <p
          style={{
            fontSize: "30px",
            fontWeight: 600,
            background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
            backgroundClip: "text",
            color: "transparent",
            margin: "0 0 20px 0",
          }}
        >
          Full Stack Software Engineer
        </p>

        {/* Description */}
        <p
          style={{
            fontSize: "20px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 0 30px 0",
            lineHeight: 1.5,
          }}
        >
          Building scalable SaaS products, automation platforms, and real-time systems
        </p>

        {/* Tech pills */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
          {["React.js", "Next.js", "Node.js", "MongoDB", "Redis", "TypeScript"].map((tech) => (
            <span
              key={tech}
              style={{
                padding: "8px 18px",
                borderRadius: "20px",
                border: "1px solid #334155",
                color: "#94a3b8",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
