import './App.scss';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import image1 from './images/image1.webp';
import image2 from './images/image2.webp';
import image3 from './images/image3.webp';
import image4 from './images/image4.webp';
import image5 from './images/image5.webp';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
    
      <Section
        imageUrl={image1}
        text="Starship Flight Test"
        subtext="Recent"
        btext="REWATCH"
      />

      <Section
        imageUrl={image2}
        text="STARLINK MISSION"
        subtext="RECENT LAUNCH"
        btext="REWATCH"
      />

      <Section
        imageUrl={image3}
        text="ViaSat-3 Americas Mission"
        subtext="Recent Launch"
        btext="REWATCH"
      />

      <Section
        imageUrl={image4}
        text="SES O3b mPOWER Mission"
        subtext="Recent Launch"
        btext="REWATCH"
      />

      <Section
        imageUrl={image5}
        text="Starship Selected by NASA to Support Sustained Lunar Exploration"
        subtext=""
        btext="LEARN MORE"
      />

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

