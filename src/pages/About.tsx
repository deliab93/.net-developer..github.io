import React, { useEffect, useRef, useCallback } from 'react';
import {
  Code2,
  Database,
  Globe,
  Server,
  LayoutGrid,
  Cloud,
  Shield,
  Wrench
} from 'lucide-react';
import TechCard from '../components/TechCard';
import SkillBar from '../components/SkillBar';

const About: React.FC = () => {
  const observedElementsRef = useRef<HTMLElement[]>([]);

  const addToObserved = useCallback((el: HTMLElement | null) => {
    if (el && !observedElementsRef.current.includes(el)) {
      el.classList.add('opacity-0');
      observedElementsRef.current.push(el);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observedElementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observedElementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">
            .NET Developer & Umbraco Specialist
          </h1>
          <p className="text-xl mb-6 animate-fade-in delay-100">
            Building robust web applications with C#, .NET, and Umbraco CMS.
          </p>
          <div className="flex gap-4 animate-fade-in delay-200">
            <a href="/contact" className="btn bg-white text-primary-700">
              Get in Touch
            </a>
            <a href="#stack" className="btn border border-white text-white">
              View My Stack
            </a>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-16" ref={addToObserved}>
        <div className="container-custom max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="mb-4">
            I'm a seasoned .NET developer with expertise in enterprise-grade web applications,
            specializing in C#, .NET Core, and Umbraco CMS.
          </p>
          <p className="mb-4">
            I deliver scalable, secure, and maintainable solutions with strong frontend and backend integration.
          </p>
          <p>
            Passionate about clean code, Azure cloud, and staying updated with the latest from the Microsoft stack.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800" id="stack" ref={addToObserved}>
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">My Tech Stack</h2>
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Core Technologies</h3>
              <SkillBar name="C#" percentage={95} delay={100} />
              <SkillBar name=".NET Core" percentage={90} delay={200} />
              <SkillBar name="Umbraco CMS" percentage={95} delay={300} />
              <SkillBar name="SQL Server" percentage={85} delay={400} />
              <SkillBar name="Azure" percentage={80} delay={500} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
              <SkillBar name="HTML/CSS" percentage={90} delay={100} />
              <SkillBar name="JavaScript" percentage={85} delay={200} />
              <SkillBar name="Razor" percentage={95} delay={300} />
              <SkillBar name="React" percentage={75} delay={400} />
              <SkillBar name="Angular" percentage={70} delay={500} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechCard icon={Code2} title="Languages" description="Proficient in C# and OOP." />
            <TechCard icon={LayoutGrid} title="CMS" description="Umbraco v7-v13+ specialist." />
            <TechCard icon={Globe} title="Frontend" description="Razor, React, Angular, HTML/CSS." />
            <TechCard icon={Database} title="Databases" description="SQL Server and CosmosDB." />
            <TechCard icon={Server} title="Testing" description="Playwright for automation & SEO." />
            <TechCard icon={Wrench} title="CI/CD" description="Azure DevOps pipelines & releases." />
            <TechCard icon={Shield} title="Security" description="NWebSec, CSP, secure headers." />
            <TechCard icon={Cloud} title="Cloud" description="Azure cloud architecture & services." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500 text-white text-center" ref={addToObserved}>
        <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Let’s build something powerful — reach out and let’s talk about your project.
        </p>
        <a href="/contact" className="btn bg-white text-primary-700">
          Contact Me
        </a>
      </section>
    </div>
  );
};

export default About;
