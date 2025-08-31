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
            <a href="mailto:jeffrinjames99@gmail.com" className="bg-black text-white px-10 py-6 font-extrabold text-2xl block border-4 border-black hover:bg-yellow-400 hover:text-black transition-colors text-center">
              EMAIL ME
            </a>
          </div>
        </div>
      </div>
    </section>;
}
