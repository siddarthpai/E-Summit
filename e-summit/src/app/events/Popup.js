import React from "react";

export default function Popup({ onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button onClick={onClose} className="close-btn">
          Close
        </button>
        <p>Pop-up content goes here</p>
      </div>
    </div>
  );
}
