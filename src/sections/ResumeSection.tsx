
import SectionHeading from '../components/SectionHeading';
import Timeline, { TimelineItem } from '../components/Timeline';
import { Briefcase, GraduationCap } from 'lucide-react';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="RESUME"
          subtitle="My education and experience journey"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Work Experience
            </h3>
            
            <Timeline>
              <TimelineItem
                date="2025 - Present"
                title="Data Engineering"
                subtitle="STMicroelectronics"
                icon={<Briefcase className="w-3 h-3 text-white" />}
              >
                <p>
                Gained experience in developing a real-time data streaming solution with Confluent Kafka and Databricks, utilizing PySpark and SQL to enhance data access, quality, and scalability across the Medallion Architecture.
                </p>
              </TimelineItem>
              
              <TimelineItem
                date="2022 - 2023"
                title="Full Stack Developer"
                subtitle="Shreeji Web Creation"
                icon={<Briefcase className="w-3 h-3 text-white" />}
              >
                <p>
                During my full-stack web developer internship, I gained hands-on experience in building APIs with Node.js, efficiently handling data with SQL and NoSQL databases, and enhancing client-side development using React.js.
                </p>
              </TimelineItem>
              
            </Timeline>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Education
            </h3>
            
            <Timeline>
              <TimelineItem
                date="2023 - 2025"
                title="Master's in Computer Science"
                subtitle="IIIT Delhi"
                icon={<GraduationCap className="w-3 h-3 text-white" />}
              >
                <p>
                Pursuing M.Tech in Computer Science with a specialization in Data Engineering, achieving a GPA of 8.04, and gaining expertise in data processing, analytics, scalable systems, and engineering solutions.
                </p>
              </TimelineItem>
              
              <TimelineItem
                date="2019 - 2023"
                title="Bachelor's in Computer Engineering"
                subtitle="L.J. Institute of Engineering and Technology"
                icon={<GraduationCap className="w-3 h-3 text-white" />}
              >
                <p>
                Completed B.Tech in Computer Engineering with a GPA of 8.85, building a strong foundation in computer systems, programming, algorithms, data structures, and problem-solving.
                </p>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
