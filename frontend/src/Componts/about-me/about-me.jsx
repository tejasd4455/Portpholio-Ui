











import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaPython,
  FaServer,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import { FiEye } from 'react-icons/fi';
import { Link } from 'react-scroll';
import ProfileImg from '../../assets/Tejasprofilenew.jpg'; // Make sure this path is correct
import './about-me.css';
import Resume from '../../assets/Tejas_Deshmukh_Resume.pdf'

const About = () => {
  const skills = [
    { icon: <FaHtml5 />, label: 'HTML', bgColor: 'bg-orange-600', textColor: 'text-white' },
    { icon: <FaCss3Alt />, label: 'CSS', bgColor: 'bg-blue-600', textColor: 'text-white' },
    { icon: <FaJs />, label: 'JavaScript', bgColor: 'bg-yellow-400', textColor: 'text-black' },
    { icon: <FaBootstrap />, label: 'Bootstrap', bgColor: 'bg-purple-800', textColor: 'text-white' },
    { icon: <FaReact />, label: 'React', bgColor: 'bg-cyan-400', textColor: 'text-black' },
    { icon: <SiTailwindcss />, label: 'Tailwind CSS', bgColor: 'bg-sky-400', textColor: 'text-white' },
    { icon: <SiMongodb />, label: 'MongoDB', bgColor: 'bg-green-800', textColor: 'text-white' },
    { icon: <FaPython />, label: 'Python', bgColor: 'bg-blue-700', textColor: 'text-yellow-300' },
    { icon: <FaServer />, label: 'API Handling', bgColor: 'bg-slate-800', textColor: 'text-white' },
  ];

  return (
    <>
    <section
      className="min-h-screen  bg-slate-200   flex flex-col justify-center items-center py-16 border-b-4 border-slate-200 text-gray-900 px-4 md:px-8 lg:px-16"
      id="about"
    >
      <h1
        className="text-4xl md:text-6xl mb-10 font-extrabold text-center "
        style={{ textShadow: '0px 1px 0px black' }}
      >
        About Me
      </h1>

      <div className="max-w-6xl w-full grid lg:grid-cols-3 gap-10 items-start text-center lg:text-left">
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl">
            <img
              src={ProfileImg}
              alt="Tejas Deshmukh Profile"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* About Text border-l-4 pl-4 */}
        <div>
          <p className="text-black leading-relaxed text-sm md:text-base mb-6  border-orange-600 ">
            Hello! I'm <strong className="text-blue-600">Tejas Deshmukh</strong>, a frontend
            developer focused on building clean, fast, and user-friendly websites. I specialize in
            translating UI designs into responsive web interfaces and have a strong passion for
            intuitive user experiences and pixel-perfect design.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pb-5">
            <span className="w-16 h-16 md:w-20 md:h-20 bg-yellow-300 shadow-2xl text-black flex items-center justify-center rounded-full font-semibold text-xs text-center leading-tight animate-bounce">
              20+<br /> Projects
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            
<a href={Resume}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-1 bg-blue-600/100 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:scale-105 transition cursor-pointer"
>
  {/* <FiEye className="text-lg" /> */}
   Resume </a>

            <Link
              to="work"
              smooth={true}
              duration={500}
              className="bg-orange-600/100 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:scale-105 transition cursor-pointer"
            >
              Project
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-yellow-400/100 text-black px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:scale-105 transition cursor-pointer">
              Contact            
              </Link>
          </div>
        </div>

   {/* Skills Section */}                                
        <div>
          <h2 className="text-2xl md:text-3xl font-bold bg-slate-100 text-black mb-4 border-l-8 border-orange-600 pl-2">
          Skills
          </h2>
          <ul className="flex flex-wrap gap-4 mt-4 justify-center tracking-widest lg:justify-start bg-gray-50">
            {skills.map((skill) => (
              <li
                key={skill.label}
                className={`${skill.bgColor} ${skill.textColor} px-3 py-2 rounded cursor-pointer shadow-sm text-xs md:text-sm font-medium flex items-center gap-1 hover:scale-105 transition`}
              >
                {skill.icon} {skill.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>


{/* 
    <div className=' min-h-screen flex flex-col   items-center bg-slate-200 w-auto h-auto  '>
<div className="box bg-cyan-600 h-28 w-28 p-2 m-5 "></div>
<div className="box bg-cyan-600 h-28 w-28 p-2 m-5 "></div>
<div className="box bg-cyan-600 h-28 w-28 p-2 m-5 "></div>
<div className="box bg-cyan-600 h-28 w-28 p-2 m-5 "></div>
<div className="box bg-cyan-600 h-28 w-28 p-2 m-5 "></div>
</div> */}


    </>
  );
};

export default About;