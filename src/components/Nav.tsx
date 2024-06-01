import React, { Children, useRef, useState } from 'react';
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
    return (
        <ul className="relative mx-auto flex w-fit rounded-full border-2 border-white bg-black p-1">
            <Tab setposition={setPosition} setActive={setActive} active={active} >Home</Tab>
            <Tab setposition={setPosition} setActive={setActive} active={active} >Projects</Tab>
            <Tab setposition={setPosition} setActive={setActive} active={active} >About</Tab>
            <Tab setposition={setPosition} setActive={setActive} active={active} >Contact</Tab>

            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ setposition, setActive,
    active,
    children,
}) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            onClick={() => {
                if (!ref.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setposition({
                    width,
                    opacity: 1,
                    left: ref.current.offsetLeft,
                });

                setActive(children);
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
