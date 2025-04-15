import React from "react";

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hi, I'm Aqsa. Nice to meet you. Please take a look around</p>
                    </div>
                    <div>
                        <p>
                            I'm a passionate Full Stack Developer with 2+ years of experience crafting dynamic
                            and responsive web applications using JavaScript, TypeScript, Node.js, and modern frontend
                            frameworks like React. I love bridging the gap between design and technology,
                            ensuring that the products I build are not only functional but also visually engaging.
                            I've collaborated with cross-functional teams to deliver scalable solutions, ranging from 
                            healthcare dashboards to intake form apps that streamline patient data. Currently, I’m focused on
                            enhancing my frontend expertise and exploring animation and UI micro-interactions that elevate
                            user experience. I'm a firm believer in clean code, continuous learning, and building for impact.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;