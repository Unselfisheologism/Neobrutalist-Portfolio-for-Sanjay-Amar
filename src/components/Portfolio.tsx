import React from 'react';
interface Project {
  id: number;
  title: string;
  year: string;
  image: string;
  description: string;
}
export function Portfolio() {
  const projects: Project[] = [{
    id: 1,
    title: "Better Half Chi Love Story",
    year: "2025",
    image: "https://res.cloudinary.com/ddz3nsnq1/image/upload/v1756648172/edited-edited-1756648006467_rdqini.png",
    description: "A documentary exploring the vanishing sounds of nature."
  }, {
    id: 2,
    title: "Crime Alert",
    year: "2025",
    image: "https://res.cloudinary.com/ddz3nsnq1/image/upload/v1756648174/edited-edited-1756647763298_bp8tul.png",
    description: "A collection of short stories about urban isolation."
  }, {
    id: 3,
    title: "19th January",
    year: "2014",
    image: "https://res.cloudinary.com/ddz3nsnq1/image/upload/v1756648174/edited-edited-1756647688776_uca2cv.png",
    description: "Award-winning feature film about immigrant experiences."
  }, {
    id: 4,
    title: "Lokshahi",
    year: "2024",
    image: "https://res.cloudinary.com/ddz3nsnq1/image/upload/v1756648167/edited-edited-1756647869065_lvuwrs.png",
    description: "Novel exploring themes of memory and identity."
  }];
  
  return <section id="work" className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="inline-block text-4xl font-bold border-b-8 border-black pb-2">
            MY WORK
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map(project => <div key={project.id} className="bg-white border-4 border-black group hover:-translate-y-2 transition-transform">
              <div className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 bg-black text-white px-4 py-2 font-bold">
                  Written & Directed
                </div>
                <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-2 font-bold">
                  {project.year}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                <button className="mt-4 bg-black text-white px-4 py-2 font-bold border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors">
                  View Details
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}
