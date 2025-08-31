import React from 'react';
import { BookOpenIcon, FilmIcon, AwardIcon } from 'lucide-react';
export function About() {
  return <section id="about" className="w-full bg-[#f5f5f5] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="inline-block text-4xl font-bold border-b-8 border-yellow-400 pb-2">
            ABOUT ME
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 border-4 border-black mb-8">
              <p className="text-lg mb-4">
                I'm Sanjay Amar, a writer and filmmaker with over a decade of
                experience crafting stories that resonate with audiences
                worldwide.
              </p>
              <p className="text-lg mb-4">
                My work explores the complexity of human relationships, cultural
                intersections, and social dynamics through both written word and
                visual narratives.
              </p>
              <p className="text-lg">
                Whether I'm developing a screenplay, directing a documentary, or
                writing a novel, my focus remains on authentic storytelling that
                challenges perspectives.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-black text-white p-4 border-4 border-yellow-400 flex flex-col items-center text-center">
                <BookOpenIcon size={32} className="mb-2" />
                <span className="font-bold">3 Books Published</span>
              </div>
              <div className="bg-black text-white p-4 border-4 border-yellow-400 flex flex-col items-center text-center">
                <FilmIcon size={32} className="mb-2" />
                <span className="font-bold">12 Films Directed</span>
              </div>
              <div className="bg-black text-white p-4 border-4 border-yellow-400 flex flex-col items-center text-center">
                <AwardIcon size={32} className="mb-2" />
                <span className="font-bold">5 Major Awards</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-black text-white p-6 border-4 border-white transform rotate-1">
              <h3 className="text-2xl font-bold mb-4">EXPERTISE</h3>
              <ul className="space-y-3">
                {['Screenwriting', 'Documentary Filmmaking', 'Fiction Writing', 'Film Direction', 'Creative Consulting'].map(skill => <li key={skill} className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-yellow-400 mr-3"></span>
                    <span className="text-lg">{skill}</span>
                  </li>)}
              </ul>
            </div>
            <div className="bg-yellow-400 p-6 border-4 border-black transform -rotate-1">
              <h3 className="text-2xl font-bold mb-4">EDUCATION</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold">MFA in Film Production</p>
                  <p>New York Film Academy</p>
                </div>
                <div>
                  <p className="font-bold">BA in English Literature</p>
                  <p>University of California, Berkeley</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}