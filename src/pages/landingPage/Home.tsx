// import { useTranslation } from 'react-i18next'
// import LanguageSelector from '../../components/Language-selector'
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import Hero from "../../components/landing/Hero";
import Service from "../../components/landing/Service";
import Progress from "../../components/landing/Progress";
import Testimonial from "../../components/landing/Testimonial";
import Contact from "../../components/landing/Contact";
import About from "../../components/landing/About";
import Features from "../../components/landing/Features";
import Frequently from "../../components/landing/Frequently";
// import CustomCarousel from '../../components/Carousel'

const Home = () => {
  // const { t } = useTranslation()
  return (
    <div>
      <div className="min-h-screen h-full flex flex-col">
        <Navbar />
        <Hero className="flex-grow" />
      </div>

      <Service />
      <Features />
      <Progress />
      <Testimonial />
      <About />
      <Contact />
      {/* <CustomCarousel /> */}
      {/* <LanguageSelector />
        <p>{ t("greeting")}</p> */}
      <Frequently />
      <Footer />
    </div>
  );
};

export default Home;
