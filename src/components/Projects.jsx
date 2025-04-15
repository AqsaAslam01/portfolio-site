import React from 'react';
import { data } from "../data/data.js";


const Projects = () => {

    // projects file
    const project = data;
    //setProject(data);

    return (
        <div name='projects' className='w-full text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Projects
                    </p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                {/* Vertical List of Projects */}
                <div className="flex flex-col gap-10">
                    {project.map((item, index) => (
                        <div
                        className="group container rounded-md flex justify-center items-center mx-auto 
                                   shadow-lg shadow-[#040c16] transition-transform duration-300 transform hover:scale-105 hover:shadow-pink-600"
                        >
                            {/* Left Image */}
                            <div className="w-full md:w-1/2">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="w-full md:w-1/2 p-6 md:ml-6">
                                <h2 className="text-2xl font-bold text-pink-600">{item.name}</h2>
                                <p className="mt-2 text-gray-300">{item.description}</p>
                                {item.technologies?.length > 0 && (
                                    <p className="mt-2 text-sm text-gray-400">
                                        <strong>Technologies:</strong> {item.technologies.join(', ')}
                                    </p>
                                )}
                                <div className="mt-4">
                                    <a href={item.github} target="_blank" rel="noreferrer">
                                        <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded mr-4">
                                            Code
                                        </button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Projects;