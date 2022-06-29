// Init
import React, { useEffect } from "react";

// Importing Components
import TermsHeader from "../components/TermsConditions/TermsHeader";
import TermsConditions from "../components/TermsConditions/TermsConditions"
import Features from "../components/Home/Features";
import Footer from "../components/Home/Footer";

// Home Component
export default function Home() {
  React.useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <TermsHeader />
      <TermsConditions />
      <Footer />
    </div>
  );
}
