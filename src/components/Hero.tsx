import React from 'react';
import { ArrowDownIcon } from 'lucide-react';
export function Hero() {
  return <section id="home" className="w-full bg-black text-white min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <div className="bg-yellow-400 text-black inline-block px-4 py-2 mb-4 transform -rotate-1 border-4 border-black">
              <h2 className="text-xl font-bold">Writer & Filmmaker</h2>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              SANJAY
              <br />
              <span className="text-yellow-400">AMAR</span>
            </h1>
            <p className="text-xl mb-8 max-w-lg border-l-4 border-yellow-400 pl-4">
              Creating compelling narratives through words and visuals.
              Exploring human stories that challenge and inspire.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#work" className="bg-white text-black px-8 py-4 font-bold text-lg border-4 border-black transform hover:-translate-y-1 transition-transform">
                View My Work
              </a>
              <a href="#contact" className="bg-yellow-400 text-black px-8 py-4 font-bold text-lg border-4 border-black transform hover:-translate-y-1 transition-transform">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <div className="w-full h-[500px] bg-gray-800 border-8 border-white relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Sanjay Amar" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
                <p className="text-white font-bold">
                  Storyteller. Visionary. Creator.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce bg-white p-3 rounded-full border-4 border-black">
            <ArrowDownIcon className="text-black" size={24} />
          </a>
        </div>
      </div>
    </section>;
}