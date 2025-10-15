import React, { useRef } from 'react';
import { FaCode, FaPaintBrush, FaHashtag,FaCss3Alt } from 'react-icons/fa';

export default function Services() {
  const frontendRef = useRef();
  const uiuxRef = useRef();
  const contentRef = useRef();

  const handleSelect = (ref) => {
    if (ref.current) {
      ref.current.removeAttribute('open');
    }
  };

  return (
    
    <section className="min-h-screen bg-[#ffffff] text-black py-20 ml-5 mr-6  flex justify-center text-2xl sm:text-3xl px-4 sm:px-6" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl text-gray-900 font-extrabold mb-2 ">Services</h2>
        <p className="text-gray-400 mb-10 text-xl font-light">what I offer</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left   ">
          {/* Card 1 */}
          
          <div className="  bg-[#EDEADE] rounded-xl p-8
           hover:shadow-lg  hover:border hover:border-black hover:scale-105 transition-all duration-300 h-[400px] w-[300px] flex flex-col justify-center "
           
           >
            <div className="mb-4 text-[#f06529]  " >
              <FaCode size={32}  /> 
            </div>
            <h3 className="text-3xl   rounded-full p-2 text-nowrap font-semibold font-sans mb-2">Frontend<br/>Developer</h3>
            <details ref={frontendRef} className="text-sm mt-2">
              <summary className="cursor-pointer text-black  hover:underline">
                Check Now →
              </summary>
              <ul className="mt-4 bg-white text-black p-4 rounded-md shadow-md space-y-2 text-sm">
                <li onClick={() => handleSelect(frontendRef)} className="cursor-pointer hover:bg-slate-300 px-2 py-1 rounded">HTML, CSS, JS</li>
                <li onClick={() => handleSelect(frontendRef)} className="cursor-pointer hover:bg-slate-300 px-2 py-1 rounded">React & Tailwind</li>
                <li onClick={() => handleSelect(frontendRef)} className="cursor-pointer hover:bg-slate-300 px-2 py-1 rounded">Responsive Design</li>
              </ul>
            </details>
          </div>

          {/* Card 2F0EAD6 */}
          <div className="bg-[#f0e68c] rounded-xl justify-center p-8 hover:shadow-lg hover:border hover:border-black hover:scale-105 transition-all duration-300 h-[400px] w-[300px] flex flex-col "
          >
            <div className="mb-4 text-purple-900">
              <FaPaintBrush size={32} />
            </div>
            <h3 className="text-3xl font-sans font-semibold mb-2">UI/UX <br/>Designer</h3>
            <details ref={uiuxRef} className="text-sm mt-2">
              <summary className="cursor-pointer text-black hover:underline">
                Check Now →
              </summary>
              <ul className="mt-4 bg-white text-black p-4 rounded-md shadow-md space-y-2 text-sm">
                <li onClick={() => handleSelect(uiuxRef)} className="cursor-pointer hover:bg-slate-300 px-2 py-1 rounded">Figma Design</li>
                <li onClick={() => handleSelect(uiuxRef)} className="cursor-pointer hover:bg-slate-300 px-2 py-1 rounded">User Flow</li>
                <li onClick={() => handleSelect(uiuxRef)} className="cursor-pointer hover:bg-slate-300 px-2 py-1 rounded">Prototyping</li>
              </ul>
            </details>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F3E5AB] rounded-xl p-8 hover:shadow-lg hover:border hover:border-black hover:scale-105 transition-all duration-300 h-[400px] w-[300px] flex flex-col justify-center">
            <div className="mb-4 text-black">
              <FaHashtag size={32} />
            </div>
            <h3 className="text-3xl font-semibold font-sans mb-2">Content <br/> Creation</h3>
            <details ref={contentRef} className="text-sm mt-2">
              <summary className="cursor-pointer text-black hover:underline">
                Check Now →
              </summary>
              <ul className="mt-4 bg-white text-black p-4 rounded-md shadow-md space-y-2 text-sm">
                <li onClick={() => handleSelect(contentRef)} className="cursor-pointer hover:bg-slate-300 px-2 py-1 rounded">Video Editing</li>
                <li onClick={() => handleSelect(contentRef)} className="cursor-pointer hover:bg-slate-300 px-2 py-1 rounded">Blog Writing</li>
                <li onClick={() => handleSelect(contentRef)} className="cursor-pointer hover:bg-slate-300 px-2 py-1 rounded">Social Media Content</li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}