import React from "react";
import Hero from "../Components/Hero";
import InfiniteScrollright from "../Components/InfiniteScrollright";
import InfiniteScrolleft from "../Components/InfiniteScrolleft";
import Intro from "../Components/Intro";
import Projects from "../Components/Projects";
import Text from "../Components/Text";
import Service from "../Components/Service";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";
import Work from "../Components/Work";
import TestimonialsBurst from "../Components/TestimonialsBurst";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between mt-20 px-10 md:px-15 lg:px-30">
      <Hero />

      <div className="w-full flex flex-col gap-3 mt-5">
        <InfiniteScrollright />
        <InfiniteScrolleft />
      </div>
      <Intro />
      <Projects />
      <Text />
      <Service />
      <TestimonialsBurst />
      <Work />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;