import React from "react";
import Hero19 from "../components/home/Hero19";
import Header from "../components/home/Header";
import Service1 from "../components/home/Service1";
import About from "../components/home/About";
// import Service4 from "../components/home/Service4";
// import CTA12 from "../components/home/CTA12";
import Testimonial5 from "../components/home/Testimonial5";
import Contact1 from "../components/home/Contact1";
import Footer5 from "../components/home/Footer5";
import Portfolio from "../components/home/Portfolio";
import Service4 from "../components/home3/Service4";
import Hero38 from "../components/home3/Hero38";
import Service7 from "../components/home3/Service7";
import Statistic4 from "../components/about/Statistic4";
import CTA12 from "../components/home3/CTA12";
import Faq5 from "../components/home3/Faq5";
import Gallery5 from "../components/home3/Gallery5";
import Company1 from "../components/home3/Company1";
import Product from "../components/home3/Product";
import CTA10 from "../components/home3/CTA10";
import Testimonial4 from "../components/home3/Testimonial4";
import Pricing2 from "../components/home3/Pricing2";
import Blog from "../components/home3/Blog";
import Contact5 from "../components/home3/Contact5";
// import HomePage2 from "../components/home/homePage";

function HomePage() {
  return (
    <div>
      <Hero38 />
      <Service7 />
      <Service4 />
      <CTA12 />
      <Faq5 />
      <Gallery5 />
      <Company1 />
      <Product grid={true} />
      <CTA10 />
      <Testimonial4 />
      <Pricing2 />
      <Contact5 />
    </div>
  );
}

export default HomePage;
