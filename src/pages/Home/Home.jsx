import React from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("red");
  return (
    <div
      style={{
        maxWidth: "1376px",
        margin: "auto",
        padding: "1rem",
        border: "1px blue solid",
      }}
    >
      <h1>Home</h1>
      <ItemList color={color} />
    </div>
  );
}
