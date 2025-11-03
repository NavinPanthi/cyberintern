import Contact from "@/features/landing/contact";
import Footer from "@/features/landing/footer";
import ImageCarousel from "@/features/landing/hero-section";

import About from "../../features/landing/about";
import Navbar from "../../features/landing/navbar";

const Landing = () => {
  return (
    <div className="tracking-wider">
      <Navbar />
      <ImageCarousel />
      <Contact />
      <About />
      <Footer />
    </div>
  );
};

export default Landing;
