import React from "react";
import Navbar from "./components/portfolio/Navbar";
import Footer from "./components/portfolio/Footer";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage={currentPageName} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
