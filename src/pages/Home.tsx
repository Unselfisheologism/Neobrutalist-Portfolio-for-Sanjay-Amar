import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Portfolio } from '../components/Portfolio';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
export function Home() {
  return <div className="bg-[#f5f5f5] min-h-screen w-full">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>;
}