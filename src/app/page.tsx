import PageObserver from "./components/PageObserver";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import WhyBook from "./components/WhyBook";
import Properties from "./components/Properties";
import Destinations from "./components/Destinations";
import Celebrate from "./components/Celebrate";
import Reviews from "./components/Reviews";
import Perks from "./components/Perks";
import Partners from "./components/Partners";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import WaFloat from "./components/WaFloat";

export default function Home() {
  return (
    <>
      <PageObserver />
      <WaFloat />
      <Nav />
      <Hero />
      <Ticker />
      <WhyBook />
      <Properties />
      <Destinations />
      <Celebrate />
      <Reviews />
      <Perks />
      <Partners />
      <Newsletter />
      <Footer />
    </>
  );
}
