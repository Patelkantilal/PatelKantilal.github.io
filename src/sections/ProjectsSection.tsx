
import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

export const projects = [
  {
    id: 1,
    title: 'Acadmia Portal',
    description: 'Built an academic portal with course controls and secure, real-time updates.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    tags: ['C', 'Socket', 'Sysytem call'],
    category: 'C/C++',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Tastbud',
    description: "Built a ReactJS food recommender using MySQL for personalized menu suggestions.",
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'MySQL', 'ETL'],
    category: 'Data Enginerring',
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Job Seeker',
    description: 'Built an LLM-based job matcher for resume analysis and personalized suggestions.',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'LLM', 'ML'],
    category: 'Machine Learning',
    demoUrl: '#',
    repoUrl: '#',
  },
  // {
  //   id: 4,
  //   title: 'Task Management App',
  //   description: 'A collaborative task management application with real-time updates, task assignment, and progress tracking.',
  //   image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
  //   tags: ['React', 'Redux', 'Firebase'],
  //   category: 'web',
  //   demoUrl: '#',
  //   repoUrl: '#',
  // },
  // {
  //   id: 5,
  //   title: 'Weather Forecast App',
  //   description: 'A weather application showing forecasts, alerts, and historical data with beautiful visualizations.',
  //   image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
  //   tags: ['React Native', 'API Integration'],
  //   category: 'mobile',
  //   demoUrl: '#',
  //   repoUrl: '#',
  // },
  // {
  //   id: 6,
  //   title: 'Company Dashboard',
  //   description: 'An admin dashboard with analytics, user management, and content management features.',
  //   image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
  //   tags: ['React', 'TypeScript', 'Chart.js'],
  //   category: 'web',
  //   demoUrl: '#',
  //   repoUrl: '#',
  // },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const navigate = useNavigate();
  
  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'C/C++', label: 'C/C++' },
    { value: 'Data Enginerring', label: 'Data Enginerring' },
    { value: 'Machine Learning', label: 'Machine Learning' },
  ];
  
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);
  
  // Display only the first 3 projects if showAllProjects is false
  const displayedProjects = showAllProjects 
    ? filteredProjects 
    : filteredProjects.slice(0, 3);
  
  const handleViewAll = () => {
    setShowAllProjects(true);
  };
  
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="PROJECTS"
          subtitle="Take a look at my featured work"
        />
        
        <div className="flex justify-center flex-wrap gap-3 mt-10">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => {
                setActiveCategory(category.value);
                setShowAllProjects(false); // Reset to showing only 3 projects when changing categories
              }}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category.value
                  ? 'bg-white text-black'
                  : 'bg-secondary hover:bg-secondary/80 text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {displayedProjects.map(project => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              demoUrl={project.demoUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
        
        {!showAllProjects && filteredProjects.length > 3 && (
          <div className="mt-12 text-center">
            <Button variant="outline" onClick={handleViewAll}>View All Projects</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
