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
                            Passionate Full-Stack Software Engineer with 2 years of experience building
                            high-performance web applications using MEAN  technologies. Skilled at transforming
                            complex challenges into efficient, streamlined solutions, with expertise in Node.js,
                            Express, Angular, and React. Recognized for a sharp attention to detail and a
                            proactive problem-solving approach. Eager to bring innovative ideas and a
                            forward-thinking mindset to a dynamic development team, ready to contribute from day
                            one.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;