import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Businesses from "@/components/Businesses";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MaizeTech - Cultivating Innovation | Technology Holding Company</title>
        <meta 
          name="description" 
          content="MaizeTech operates a diverse portfolio of technology ventures including AI, cloud computing, fintech, cybersecurity, and sustainable technology solutions." 
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Businesses />
          <About />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
