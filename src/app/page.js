import Head from 'next/head';
import Image from "next/image";
import styles from "./page.module.css";
import CustomCursor from './components/CustomCursor';
import { Navbar } from "./components/Navbar";
import { ParallaxSlider } from "./components/ParallaxSlider";
import AboutSection from "./components/AboutSection";
import FeaturedService from "./components/FeatureService";
import ServiceSlider from "./components/ServiceSlider";
import CounterSection from './components/CounterSection';
import Testimonials from "./components/Testimonials";
import BlogSlider from "./components/BlogSlider";
import { LastContent } from "./components/LastContent";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor/>
      <Navbar/>
      <ParallaxSlider/>
      <AboutSection/>
      <FeaturedService/>
      <ServiceSlider/>
      <CounterSection/>
      <Testimonials/>
      <BlogSlider/>
      <LastContent/>
      <Footer/>
    </>
  );
}
