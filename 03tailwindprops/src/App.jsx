import { useState } from "react";

import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card
        username="Obinna"
        post="software Intern"
        Image="https://picsum.photos/200/300"
      />
      <Card Image="https://picsum.photos/seed/picsum/200/300" />
      <Card Image="https://picsum.photos/200/300" />
    </>
  );
}

export default App;
