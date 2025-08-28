import React from "react";

export default function MyButton({ label = "Clique aqui", alertContent = "Você clicou!" }) {
  return (
    <button
      style={{ padding: "8px 16px", borderRadius: "8px", cursor: "pointer" }}
      onClick={() => alert(alertContent)}
    >
      {label}
    </button>
  );
}