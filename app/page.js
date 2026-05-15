import Spinner from "@/components/Spinner";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import About from "@/components/About";
import Reservation from "@/components/Reservation";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BackToTop from "@/components/BackToTop";

export default function HomePage() {
  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />
      <div className="site-content">
        <main>
          <HeroCarousel />
          <About />
          <Reservation />
          <Services />
          <Team />
          <Contact />
          <CallToAction />
        </main>
        <Footer />
      </div>
      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}
