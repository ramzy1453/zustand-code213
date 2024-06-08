import React from "react";

export default function Item(props) {
  const color = props.color;
  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: color,
      }}
    >
      Item
    </div>
  );
}
