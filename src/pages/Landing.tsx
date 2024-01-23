<<<<<<< Updated upstream
import React from 'react'
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import Menu from '../Components/Menu';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';
=======
import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Cards from "../components/Cards";
import MenuMobile from "@/components/MenuMobile";
>>>>>>> Stashed changes

type Props = {};

const Landing = (props: Props) => {
  return (
    <div>
      <Nav />
      <div className="px-5">
        <Hero />
<<<<<<< Updated upstream
        <Menu />
        <Cards />
        <Footer/>
=======
        <div className="hidden md:block">
          <Menu />
          <Cards />
        </div>
        <div className="md:hidden">
          <MenuMobile />
        </div>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default Landing;
