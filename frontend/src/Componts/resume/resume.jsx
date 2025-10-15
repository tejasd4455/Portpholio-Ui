import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './resume.css'

function Resume() {
  return (
    <section className="min-h-screen   text-black py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-5xl mx-auto  ml-5 mr-5">
        {/* Header */}
        <div className="text-center mb-8 ">
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">My Journey</h1>
          <div className="flex items-center justify-center gap-2 text-black mt-4">
            <FaGraduationCap className="text-3xl text-blue-700" />
            <span className="text-lg font-medium text-blue-700">Education & Experience</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 border-l-4 border-dashed border-slate-950">
          {/* Item 1 */}
          <TimelineItem
            title="Bachelor of Computer Application (BCA)"
            institution="New Arts, Commerce & Science College, Shevgaon"
            duration="2021 – 2024"
            borderColor="border-red-600"
          />

          {/* Item 2 */}
          <TimelineItem
            title="Frontend Web Developer Intern"
            institution="Seven Mentor Pvt. Ltd., Pune"
            duration="Jan 2024 – Aug 2024"
            borderColor="border-red-600"
          />

          {/* Item 3 */}
          <TimelineItem
            title="Freelance Frontend Developer"
            institution="E-Commers Websites, Furniture Site, Portfolio,Blog,"
            duration="2024 – Present"
            borderColor="border-red-600"
          />

          {/* Item 4 */}
          <TimelineItem
            title="Self-improvement/Knowledge expansion"
            institution=" Frontend-Tools, React, Tailwind, MongoDB, UI/UX"
            duration=""
            borderColor="border-blue-800"
            isActive
          />
        </div>
      </div>
    </section>
  );
}

const TimelineItem = ({ title, institution, duration, borderColor, isActive }) => {
  return (
    <div className="relative mb-10 ">
      <div className={`absolute left-[-0.75rem] top-2 w-0 h-0 border-t-[8px] border-b-[8px] border-l-[12px] border-t-transparent border-b-transparent ${borderColor}`}></div>
      <div className="ml-4">
        <h3 className="text-lg sm:text-xl    font-semibold">{title}</h3>
        <p className="text-sm text-neutral-960">{institution}</p>
        {duration && <p className="text-sm text-gray-500">{duration}</p>}
        {isActive && (
          <p className="relative bg-green-100 inline-flex items-center gap-2 text-green-800 text-sm font-bold border border-green-900/50 rounded-full px-3 py-1 hover:scale-105 transition mt-2">
            {/* Ping Circle */}
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-85"></span>
              <span className="relative inline-flex size-3 rounded-full bg-green-700"></span>
            </span>
            ACTIVE
          </p>
        )}
      </div>
    </div>
  );
}

export default Resume;