import React, { useState, memo } from 'react';
type Category = 'all' | 'writing' | 'film';
interface Project {
  id: number;
  title: string;
  category: 'writing' | 'film';
  year: string;
  image: string;
  description: string;
}
export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const projects: Project[] = [{
    id: 1,
    title: 'The Silent Echo',
    category: 'film',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1159&q=80',
    description: 'A documentary exploring the vanishing sounds of nature.'
  }, {
    id: 2,
    title: 'Midnight Whispers',
    category: 'writing',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'A collection of short stories about urban isolation.'
  }, {
    id: 3,
    title: 'Crossing Borders',
    category: 'film',
    year: '2020',
    image: 'https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Award-winning feature film about immigrant experiences.'
  }, {
    id: 4,
    title: 'The Forgotten Path',
    category: 'writing',
    year: '2019',
    image: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1129&q=80',
    description: 'Novel exploring themes of memory and identity.'
  }, {
    id: 5,
    title: 'Urban Rhythms',
    category: 'film',
    year: '2018',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    description: 'Short film series capturing city life across continents.'
  }, {
    id: 6,
    title: 'Echoes of Silence',
    category: 'writing',
    year: '2017',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80',
    description: 'Poetry collection that won the National Literary Award.'
  }];
  const filteredProjects = activeCategory === 'all' ? projects : projects.filter(project => project.category === activeCategory);
  return <section id="work" className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="inline-block text-4xl font-bold border-b-8 border-black pb-2">
            MY WORK
          </h2>
        </div>
        <div className="flex justify-center mb-12">
          <div className="inline-flex border-4 border-black">
            {['all', 'writing', 'film'].map(category => <button key={category} onClick={() => setActiveCategory(category as Category)} className={`px-6 py-3 font-bold text-lg uppercase ${activeCategory === category ? 'bg-yellow-400 text-black' : 'bg-white text-black hover:bg-gray-100'}`}>
                {category}
              </button>)}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="bg-white border-4 border-black group hover:-translate-y-2 transition-transform">
              <div className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 bg-black text-white px-4 py-2 font-bold">
                  {project.category.toUpperCase()}
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