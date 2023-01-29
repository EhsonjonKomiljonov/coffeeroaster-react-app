import { useState } from 'react';
import { Header } from './components/Header/Header';
// Home
import { Home } from './pages/Home/Home';
import { Hero } from './components/Hero/Hero';
import { Collaction } from './components/Collaction/Collection';
import { Choose } from './components/Choose/Choose';
import { Work } from './components/Work/Work';
import { Footer } from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
// About
import { About } from './pages/About/About';
import { AboutHero } from './components/AboutHero/AboutHero';
import { Commit } from './components/Commit/Commit';
import { Quality } from './components/Quality/Quality';
import { HeadQuarter } from './components/HeadQuarter/HeadQuarter';
import { Plan } from './pages/Plan/Plan';
import { PlanHero } from './components/PlanHero/PlanHero';
import { PlanWork } from './components/PlanWork/PlanWork';
import { OrderingCoffee } from './components/OrderingCoffee/OrderingCoffee';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              children2={<Collaction />}
              children3={<Choose />}
              children4={<Work />}
            >
              <Hero />
            </Home>
          }
        />
        <Route
          path='/about'
          element={
            <About
              children2={<Commit />}
              children3={<Quality />}
              children4={<HeadQuarter />}
            >
              <AboutHero />
            </About>
          }
        />
        <Route
          path='/plan'
          element={
            <Plan
              children2={<PlanWork />}
              children3={<OrderingCoffee />}
            >
              <PlanHero />
            </Plan>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
