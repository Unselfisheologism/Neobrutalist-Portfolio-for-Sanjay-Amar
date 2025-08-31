import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export function Contact() {
  return <section id="contact" className="w-full bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="inline-block text-4xl font-bold border-b-8 border-yellow-400 pb-2">
            GET IN TOUCH
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Collaborate</h3>
            <p className="text-lg mb-8 max-w-md">
              I'm always interested in new projects and creative collaborations.
              Whether you have a film concept, need a writer, or just want to
              connect, feel free to reach out.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-yellow-400 p-3 mr-4">
                  <MailIcon className="text-black" />
                </div>
                <span>sanjay.amar@example.com</span>
              </div>
              <div className="flex items-center">
                <div className="bg-yellow-400 p-3 mr-4">
                  <PhoneIcon className="text-black" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <div className="bg-yellow-400 p-3 mr-4">
                  <MapPinIcon className="text-black" />
                </div>
                <span>Los Angeles, California</span>
              </div>
            </div>
          </div>
          <div>
            <form className="bg-white text-black p-8 border-4 border-yellow-400 transform rotate-1">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="name">
                  NAME
                </label>
                <input type="text" id="name" className="w-full p-3 border-4 border-black focus:border-yellow-400 outline-none" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="email">
                  EMAIL
                </label>
                <input type="email" id="email" className="w-full p-3 border-4 border-black focus:border-yellow-400 outline-none" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="message">
                  MESSAGE
                </label>
                <textarea id="message" rows={4} className="w-full p-3 border-4 border-black focus:border-yellow-400 outline-none resize-none" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="bg-black text-white px-8 py-3 font-bold text-lg border-4 border-black hover:bg-yellow-400 hover:text-black transition-colors">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
}