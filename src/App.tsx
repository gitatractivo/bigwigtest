import React from'react';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Menu from './Components/Menu';
import Cards from './Components/Cards';

const App =()=>{
  return(
      <div className="min-w-screern min-h-screen bg-white px-5">
        <Nav/>
        <Hero/>
        <Menu/>
        <Cards/>

      </div>
  );
};



export default App
