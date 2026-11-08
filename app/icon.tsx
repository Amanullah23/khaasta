import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #1a0000, #0a0a0a)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        border: "1px solid #dc2626",
      }}
    >
      {/* K letter in gold */}
      <div
        style={{
          fontSize: "20px",
          fontWeight: "900",
          background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
          backgroundClip: "text",
          color: "#F59E0B",
          fontFamily: "serif",
          lineHeight: 1,
        }}
      >
        K
      </div>
      {/* Fire dot */}
      <div
        style={{
          position: "absolute",
          top: "4px",
          right: "5px",
          width: "7px",
          height: "7px",
          background: "#dc2626",
          borderRadius: "50%",
        }}
      />
    </div>,
    { ...size },
  );
}
