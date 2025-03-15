import { useTranslation } from 'react-i18next'
import LanguageSelector from '../../components/Language-selector'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Service from '../../components/Service'
import Progress from '../../components/Progress'
import Testimonial from '../../components/Testimonial'
import Contact from '../../components/Contact'
import About from '../../components/About'
import Features from '../../components/Features'
// import CustomCarousel from '../../components/Carousel'


const Home = () => {
  // const { t } = useTranslation()
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Features />
      <Progress/>
      <Testimonial />
      <About />
      <Contact />
      {/* <CustomCarousel /> */}
      {/* <LanguageSelector />
        <p>{ t("greeting")}</p> */}
      <Footer />
      
    </div>
  )
}

export default Home
