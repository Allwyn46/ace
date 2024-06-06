import React from 'react';

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
                            <h1 className="text-white font-ar text-[290px] leading-[16rem]">
                                FRONTEND DEVELOPER
                            </h1>
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
