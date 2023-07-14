import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'
import More from './components/More'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <More />
      {/* <HeadlineCards /> */}
      <Food />
      <Stats />
      {/* <Category /> */}
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
