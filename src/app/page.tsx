import Image from "next/image";
import React from "react";

// List of Components
import MainContent from "./components/mainContent";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <MainContent />
      </div>
    </div>
  );
}
