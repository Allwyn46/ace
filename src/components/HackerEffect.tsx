import React, { useState, useEffect } from 'react';

const HackerEffect: React.FC = () => {
    const [text, setText] = useState<string>('');
    const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    useEffect(() => {
        let iterations: number = 0;
        const interval: NodeJS.Timeout = setInterval(() => {
            let newText: string = '';
            for (let i: number = 0; i < text.length; i++) {
                if (i < iterations) {
                    newText += text[i];
                } else {
                    newText += letters[Math.floor(Math.random() * 26)];
                }
            }
            setText(newText);
            iterations += 1 / 3;
            if (iterations > text.length) {
                clearInterval(interval);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return <div id="hacker_effect">{text}</div>;
};

export default HackerEffect;
