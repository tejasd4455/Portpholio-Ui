import React from 'react';
import { FaLinkedin, FaLaptopCode, FaGithub, FaTwitter, FaInstagram, FaYoutube, FaCode } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white px-6 lg:px-20 pt-20 pb-10 relative overflow-hidden">

      {/* Watermark */}
      <div className="absolute flex-wrap top-52 right-12 text-[80px] sm:text-[100px] md:text-[110px] text-[#000000] font-extrabold select-none pointer-events-none  leading-none text-border">
        UIbyTejas
      </div>

      {/* Main Content */}
      <div className="relative  max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Branding */}
        <div>
         <h1 className="text-2xl md:text-2xl mb-4 font-extrabold flex items-center gap-2 group">
  <FaCode className="text-[32px] animate-bounce md:text-[36px] text-orange-500 group-hover:scale-110 group-hover:text-pink-500 transition-all duration-300" />
  
  <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent tracking-wide group-hover:brightness-110 transition-all duration-300">
    UI<span className="text-blue-500">bytej</span><span className=" text-pink-600">as</span>
  </span>
</h1>


          <p className="text-[#929292]">Crafting unique digital experiences with code and creativity.</p>
          <div className="mt-4 space-y-1 text-sm text-[#929292]">
            <p>Pune, Maharashtra</p>
            <p>+91 9881073346</p>
            <p><a href="mailto:tejadeshmukh03@gmail.com" className="hover:text-orange-500">tejadeshmukh03@gmail.com</a></p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#FFFFFF]">Services</h3>
          <ul className="space-y-2 text-[#929292] text-sm">
            <li>Frontend Development</li>
            <li>React-Js Base (SPAs)</li>
            <li>Firebase Frontend Integration</li>
            <li>Tailwind CSS or Bootstrap Integration</li>
            <li>MongoDB Integration</li>
            <li>Responsive Design </li>
            <li>Website Maintenance & Support</li>
            <li>UI/UX</li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#FFFFFF]">Quick Links</h3>
          <ul className="space-y-2 text-[#929292] text-sm">
            <li><a href="#home" className="hover:text-orange-500">Home</a></li>
            <li><a href="#about" className="hover:text-orange-500">About Me</a></li>
            <li><a href="#projects" className="hover:text-orange-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Extras */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#FFFFFF]">More</h3>
          <ul className="space-y-2 text-[#929292] text-sm">
            <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">My Resume</a></li>
            <li><a href="#privacy" className="hover:text-orange-500">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-orange-500">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="relative   mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://www.linkedin.com/in/tejas-deshmukh-6375ab2b5" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[#0077B5] hover:opacity-80 transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:opacity-80 transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-[#1DA1F2] hover:opacity-80 transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#E1306C] hover:opacity-80 transition" />
          </a>
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-[#FF0000]  hover:opacity-80 transition" />
          </a>
        </div>

        {/* Tools */}
       
      </div>

      {/* Copyright */}
      <div className="relative  text-center mt-6 border-t border-gray-700 pt-4 text-xs text-gray-500">
        <p>© 2025 Tejas Deshmukh. All Rights Reserved.</p>
        <p className="mt-1">
          Built with 💻 by <span className="text-orange-500 font-semibold">Tejas</span>
        </p>
         <div className="flex justify-end gap-1 items-center border-b border-gray-700">
  <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png" alt="React" className="h-8 w-8 object-contain" />
  <img src="https://icon.icepanel.io/Technology/svg/MongoDB.svg" alt="MongoDB" className="h-8 w-8 object-contain" />
  <img src="https://img.icons8.com/color/48/visual-studio-code-2019.png" alt="VSCode" className="h-8 w-8 object-contain" />
   </div>
      </div>
      
    </footer>
  );
};

export default Footer;
