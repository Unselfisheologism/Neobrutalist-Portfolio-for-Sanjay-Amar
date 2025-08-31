import React from 'react';
import { TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
export function Footer() {
  return <footer className="w-full bg-[#f5f5f5] border-t-8 border-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-bold text-3xl border-4 border-black px-3 py-1 inline-block">
              <span className="text-yellow-400">S</span>A
            </div>
          </div>
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="#" className="bg-black text-white p-2 hover:bg-yellow-400 hover:text-black transition-colors">
              <TwitterIcon size={20} />
            </a>
            <a href="#" className="bg-black text-white p-2 hover:bg-yellow-400 hover:text-black transition-colors">
              <InstagramIcon size={20} />
            </a>
            <a href="#" className="bg-black text-white p-2 hover:bg-yellow-400 hover:text-black transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href="#" className="bg-black text-white p-2 hover:bg-yellow-400 hover:text-black transition-colors">
              <YoutubeIcon size={20} />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">
              © {new Date().getFullYear()} Sanjay Amar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
}