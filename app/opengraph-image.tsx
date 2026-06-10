import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vilbert TP — Terrassement, Voirie & Réseaux en Hauts-de-France";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#b5451b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#f5b800",
            fontWeight: 700,
            marginBottom: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Somme (80) · Oise (60) · Pas-de-Calais (62)
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Vilbert TP
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#f5b800",
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          Terrassement · Voirie · Réseaux
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.9)",
            background: "rgba(0,0,0,0.2)",
            padding: "12px 32px",
            borderRadius: 8,
          }}
        >
          📞 03 22 93 02 86 · tp@groupe-vilbert.fr
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#f5b800",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
