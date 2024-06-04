import React, { Children, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Nav = () => {
    return (
        <div>
            <SlideTabs />
        </div>
    );
};

const SlideTabs = () => {
    const [active, setActive] = useState<string | null>(null);
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                const top = section.getBoundingClientRect().top;
                if (top >= 0) {
                    setActive(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <ul className="relative mx-auto flex w-fit rounded-full border-2 border-white bg-black p-1">
            <Tab
                setposition={setPosition}
                setActive={setActive}
                active={active}
                sectionId="home"
            >
                Home
            </Tab>
            <Tab
                setposition={setPosition}
                setActive={setActive}
                active={active}
                sectionId="projects"
            >
                Projects
            </Tab>
            <Tab
                setposition={setPosition}
                setActive={setActive}
                active={active}
                sectionId="about"
            >
                About
            </Tab>
            <Tab
                setposition={setPosition}
                setActive={setActive}
                active={active}
                sectionId="contact"
            >
                Contact
            </Tab>

            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ setposition, setActive, active, children, sectionId }) => {
    const ref = useRef(null);
    useEffect(() => {
        if (sectionId === 'home' && ref.current) {
            const { width } = ref.current.getBoundingClientRect();
            setposition({
                width,
                opacity: 1,
                left: ref.current.offsetLeft,
            });
            setActive('home');
        }
    }, [setActive, setposition, sectionId]);
    return (
        <li
            ref={ref}
            onClick={() => {
                const section = document.getElementById(sectionId);
                if (!ref.current || !section) return;

                const { width } = ref.current.getBoundingClientRect();

                setposition({
                    width,
                    opacity: 1,
                    left: ref.current.offsetLeft,
                });

                section.scrollIntoView({ behavior: 'smooth' });
                setActive(sectionId);
            }}
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
        >
            {children}
        </li>
    );
};

const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={position}
            className="absolute z-0 h-7 rounded-full bg-white w-36 md:h-12"
        />
    );
};

export default Nav;
