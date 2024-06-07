import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HackerEffect: React.FC = ({ children }) => {
    const [text, setText] = useState<string>('');

    useEffect(() => {
        const originalText = children.props.children;
        let iterations = 0;
        const interval = setInterval(() => {
            let newText = '';
            for (let i = 0; i < originalText.length; i++) {
                if (i < iterations) {
                    newText += originalText[i];
                } else {
                    newText += getRandomChar();
                }
            }
            setText(newText);
            iterations += 1 / 4;
            if (iterations > originalText.length) {
                clearInterval(interval);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [children]);

    const getRandomChar = () => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return letters[Math.floor(Math.random() * 26)];
    };

    return (
        <div className="w-10/12">
            <h1
                className="text-white font-ar text-[290px] leading-[16rem]"
                id="hacker_effect"
            >
                {text}
            </h1>
        </div>
    );
};

const Hero = () => {
    return (
        <>
            <section id="home">
                <div className="max-container">
                    <div className="flex justify-center items-center h-[600px]">
                        <div className="flex flex-col">
                            <p className="text-white font-out_semi ms-2 text-2xl">
                                HELLO I'M ALLWYN, A
                            </p>
                            <HackerEffect>
                                <h1
                                    className="text-white font-black text-[290px]"
                                    data-value="FRONTEND DEVELOPER"
                                >
                                    FRONTEND
                                </h1>
                            </HackerEffect>
                            <HackerEffect>
                                <h1
                                    className="text-white font-black text-[290px]"
                                    data-value="FRONTEND DEVELOPER"
                                >
                                    DEVELOPER
                                </h1>
                            </HackerEffect>
                        </div>
                        <div>
                            <h1 className="text-white">
                                <button className="button-54" role="button">
                                    Scroll Down
                                </button>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
