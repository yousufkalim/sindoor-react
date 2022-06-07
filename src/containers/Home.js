// Init
import React from "react";

// Importing Components
import Header from "../components/Home/Header";
import HomeSection from "../components/Home/HomeSection";
import Features from "../components/Home/Features";
import GetaQuote from "../components/Home/GetaQuote";
import AppStore from "../components/Home/AppStore";
import Footer from "../components/Home/Footer";

// Home Component
export default function Home() {
  return (
    <div>
      <Header />
      <HomeSection />
      <Features />
      <GetaQuote />
      <AppStore />
      <Footer />
    </div>
  );
}
