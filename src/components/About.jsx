import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <>
      <section className="bg-white h-auto md:h-52">
        <div className="flex justify-center">
          <div className="max-w-4xl px-8 py-8 md:max-w-3xl md:px-0 md:py-16 text-center md:text-left md:mt-4 lg:-mt-8">
            <p className="max-w-8xl mx-auto md:mx-0">
              I am a proactive Software Engineer, known for my fast learning abilities and eagerness to delve deeply into the world of technology. My dedication to leaving a significant and impactful footprint in the software industry fuels my relentless pursuit of excellence. This commitment drives me to consistently strive for the highest standards in my work, and to approach every challenge with a solution-oriented mindset. I am passionate about leveraging my skills and knowledge to make meaningful contributions to the field of software engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Skills and Technologies</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Here are some of the key skills and technologies I am proficient in:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard
              title="UI Designer"
              description="I enjoy creating user interfaces that are not only aesthetically pleasing but also intuitive and user-friendly."
              tools={['Pen and Paper', 'Figma']}
            />
            <SkillCard
              title="Front-End Development"
              description="I specialize in building responsive and interactive front-end experiences using a variety of frameworks and libraries."
              tools={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'BULMA', 'React', 'Bootstrap', 'Tailwind', 'NextJs']}
            />
            <SkillCard
              title="Back-End Development"
              description="My expertise includes designing and implementing scalable back-end solutions to support complex applications."
              tools={['NestJS', 'NodeJS', 'ExpressJS', 'appwrite', 'TypeScript', 'JavaScript', 'Django']}
            />
            <SkillCard
              title="Mobile-App Development"
              description="I have experience developing mobile applications that run seamlessly across different platforms."
              tools={['Flutter', 'Kotlin']}
            />
            <SkillCard
              title="Programming Languages"
              description="I am proficient in several programming languages, enabling me to tackle a wide range of development challenges."
              tools={['Python', 'Java', 'C++', 'C']}
            />
            <SkillCard
              title="Databases"
              description="I have a strong understanding of database management systems, essential for storing and retrieving data efficiently."
              tools={['MySQL', 'MongoDB', 'PostgreSQL']}
            />
          </div>
        </div>
      </section>
    </>
  );
};

// SkillCard component for displaying individual skills
const SkillCard = ({ title, description, tools }) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
    <p className="text-gray-700 mb-6 text-center">{description}</p>
    <h3 className="text-indigo-500 mb-2 text-center">Tools & Technologies</h3>
    <div className="border border-gray-200 mb-4"></div>
    <ul className="list-none space-y-2 text-gray-800 text-center">
      {tools.map((tool, index) => (
        <li key={index} className="flex items-center justify-center gap-2">
          <CheckCircle className="text-indigo-500" size={18} />
          {tool}
        </li>
      ))}
    </ul>
  </div>
);

export default About;
