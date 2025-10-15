import React, { Suspense, lazy } from 'react';
import Nav from './Componts/nav/nav.jsx';
import Hero from './Componts/hero/hero.jsx';

// Lazy load components for better performance
const About = lazy(() => import('./Componts/about-me/about-me.jsx'));
const Resume = lazy(() => import('./Componts/resume/resume.jsx'));
const Work = lazy(() => import('./Componts/work/work.jsx'));
const Skillsets = lazy(() => import('./Componts/skillsets/skillsets.jsx'));
const Contact = lazy(() => import('./Componts/contacts/contact.jsx'));
const Footer = lazy(() => import('./Componts/footer/footer.jsx'));
const TeamJourney = lazy(() => import('./Componts/team/team.jsx'));
const Fqa = lazy(() => import('./Componts/fqa.jsx'));

// Loading spinner while lazy components load
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Resume />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <TeamJourney />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Work />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Skillsets />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Fqa />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
