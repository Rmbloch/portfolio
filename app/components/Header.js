'use client'

import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const linkRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const mainComponentHeight = document.querySelector('#home').offsetHeight;
      if (window.scrollY > mainComponentHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className="mx-auto px-4 py-2 flex justify-between items-center">
        <div className="hover-underline">
          <a href="#home" ref={(el) => (linkRefs.current[0] = el)}>
            Ryan Bloch
          </a>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li className="hover-underline">
              <a href="#about" ref={(el) => (linkRefs.current[1] = el)}>
                About
              </a>
            </li>
            <li className="hover-underline">
              <a href="#projects" ref={(el) => (linkRefs.current[2] = el)}>
                Projects
              </a>
            </li>
            <li className="hover-underline">
              <a href="Ryan Bloch- Resume-2.pdf" target="_blank" rel="noopener noreferrer" ref={(el) => (linkRefs.current[3] = el)}>
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
    )
}
