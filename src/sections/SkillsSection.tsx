
import SectionHeading from '../components/SectionHeading';
import ProgressBar from '../components/ProgressBar';
import Card from '../components/Card';

const SkillsSection = () => {
  const skills = {
    development: [
      { name: 'Data Structure and Algorithm', percentage: 84 },
      { name: 'Object Oriented Programming', percentage: 88 },
      { name: 'C/C++', percentage: 92 },
      { name: 'Python', percentage: 82 },
      { name: 'Azure Cloud', percentage: 80 },
    ],
    Engineering: [
      { name: 'Full Stack Development', percentage: 85 },
      { name: 'HTML & CSS', percentage: 80 },
      { name: 'JavaScript', percentage: 77 },
      { name: 'React', percentage: 84 },
      { name: 'Node.js', percentage: 80 },
    ],
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="SKILLS"
          subtitle="Expertise and technologies I work with"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <Card variant="glass" className="overflow-hidden">
            <div className="mb-6">
              <h3 className="text-xl font-bold">Software Development</h3>
              <p className="text-muted-foreground">Creating robust and scalable applications</p>
            </div>
            
            <div>
              {skills.development.map((skill, index) => (
                <ProgressBar 
                  key={skill.name}
                  label={skill.name}
                  percentage={skill.percentage}
                  animationDelay={index * 100}
                />
              ))}
            </div>
          </Card>
          
          <Card variant="glass" className="overflow-hidden">
            <div className="mb-6">
              <h3 className="text-xl font-bold">Website Development</h3>
              <p className="text-muted-foreground">Crafting beautiful user experiences</p>
            </div>
            
            <div>
              {skills.Engineering.map((skill, index) => (
                <ProgressBar 
                  key={skill.name}
                  label={skill.name}
                  percentage={skill.percentage}
                  animationDelay={index * 100}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
