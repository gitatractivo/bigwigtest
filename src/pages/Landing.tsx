import React from 'react'
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import Menu from '../Components/Menu';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';

type Props = {}

const Landing = (props: Props) => {
  return (
    <div>
      <Nav />
      <div className="px-5">
        <Hero />
        <Menu />
        <Cards />
        <Footer/>
      </div>
    </div>
  );
}

export default Landing