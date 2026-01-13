import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Businesses from "@/components/Businesses";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "MaizeTech - Cultivating Innovation | Technology Holding Company";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Businesses />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
