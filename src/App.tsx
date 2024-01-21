import React from'react';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Menu from './Components/Menu';
import Cards from './Components/Cards';

const App =()=>{
  return(
      <div className=" bg-white">
        <Nav/>
        <Hero/>
        <Menu/>
        <Cards/>

      </div>
  );
};



export default App
