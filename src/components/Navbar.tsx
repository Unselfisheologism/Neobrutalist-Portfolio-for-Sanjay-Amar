import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="w-full bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="font-bold text-2xl border-4 border-white px-3 py-1">
          <span className="text-yellow-400">S</span>A
        </div>
        <div className="hidden md:flex space-x-1">
          {['Home', 'About', 'Work', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 font-bold hover:bg-yellow-400 hover:text-black transition-colors border-2 border-transparent hover:border-black">
              {item}
            </a>)}
        </div>
        <button className="md:hidden p-2 border-2 border-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {isMenuOpen && <div className="md:hidden bg-black border-t-4 border-white">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {['Home', 'About', 'Work', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="py-3 px-2 font-bold hover:bg-yellow-400 hover:text-black transition-colors border-b-2 border-white" onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>)}
          </div>
        </div>}
    </header>;
}