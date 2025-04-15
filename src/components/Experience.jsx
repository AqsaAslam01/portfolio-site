import React from "react";

const Experience = () => {
    return (
        <div name="experience" className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-10">
            <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Experience</p>
                </div>

                <div className="mb-10">
                    <h3 className="text-2xl font-semibold text-pink-600">Software Engineer — Eon Health</h3>
                    <p className="text-sm text-gray-400 mb-2">Aug 2022 – Oct 2024</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Built and maintained cloud-based cancer patient management dashboards using React, Node.js, Express, and MongoDB.</li>
                        <li>Led development of the Patient Intake App, enabling patients to complete digital forms and calculate their cancer risk using interactive UI.</li>
                        <li>Integrated single sign-on (SSO) authentication with JWT configured to expire after a single use for added security.</li>
                        <li>Removed legacy Webpack setup and replaced environment variables by fetching configurations dynamically through APIs to support DevOps-driven CI/CD pipelines.</li>
                        <li>Migrated entire hospital data records from one system to another, ensuring data integrity and minimizing downtime.</li>
                        <li>Wrote comprehensive test cases using Jest and documented RESTful APIs with Swagger, JSDoc, and Markdown for clear developer handoffs.</li>
                        <li>Collaborated with cross-functional teams including designers, QA, and product managers to deliver scalable healthcare solutions.</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Experience;
