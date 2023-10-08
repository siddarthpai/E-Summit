import React from "react";

export default function stay() {
  return (
    <div className="h-screen">
      <video autoplay muted>
        <source src="/back.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
