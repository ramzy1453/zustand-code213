import React from "react";
import Item from "../Item/Item";

export default function ItemList(props) {
  const color = props.color;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
        padding: "1rem",
        border: "1px solid #f4a261",
      }}
    >
      <Item color={color} />
      <Item color={color} />
      <Item color={color} />
      <Item color={color} />
      <Item color={color} />
      <Item color={color} />
      <Item color={color} />
    </div>
  );
}
