// Init
import React from "react";

// Importing Components
import Header from "../components/Home/Header";
import HomeSection from "../components/Home/HomeSection";
import Features from "../components/Home/Features";
import GetaQuote from "../components/Home/GetaQuote";

// Home Component
export default function Home() {
  return (
    <div>
      <Header />
      <HomeSection />
      <Features />
      <GetaQuote />
    </div>
  );
}
