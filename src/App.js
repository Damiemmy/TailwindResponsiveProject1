import React from 'react'
import Nav from './components/Nav';
import Content from './components/content';
import Analytics from './components/analytics';
import Hero from './components/hero';
import Newsletter from './components/newsletter';
import Cards from './components/Cards';
import Footers from './components/Footer';

function App() {
  return (
    <div className="bg-black w-[100%] h-full">
      <Hero/>
      <Content/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footers/>
      
    </div>
  );
}

export default App;
