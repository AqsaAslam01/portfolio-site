
import Tenzies from '../assets/tenzie.png';
import Portfolio from '../assets/portfolio.png';
import Recipe from '../assets/recipe.png';


export const data = [
    {
        id: 1,
        name: "Recipe App",
        description: "A dynamic and intuitive recipe app built using React and CSS that allows users to discover new recipes effortlessly. The app leverages the Hugging Face API to recommend recipes based on the user's input of available ingredients. Simply enter a list of ingredients, and the app intelligently suggests delicious and creative recipe options, making cooking both fun and efficient.", 
        technologies: ["React", "Hugging Face API", "CSS"],
        image: Recipe,
        github: "https://github.com/AqsaAslam01/recipe-app",
        live: "",
    },
    {
        id: 2,
        name: "Tenzies Game",
        description: "Tenzies is a fun and addictive dice game built using React and CSS. The goal of the game is to match all dice to the same number by rolling and strategically holding them. The app provides a seamless user experience with dynamic state management, and real-time updates.", 
        technologies: ["React", "ReactHooks", "CSS"],
        image: Tenzies,
        github: 'https://github.com/AqsaAslam01/tenzies-game',
        live: "",
    },
    {
        id: 3,
        name: "Chat App",
        description: "A real-time chat application that enables instant messaging between users, built with React on the frontend and Node.js on the backend. The app leverages the Socket.io WebSocket library for real-time, bi-directional communication, ensuring seamless updates and fast message delivery. Features include user authentication, private and group chat functionality, and a responsive interface for smooth performance on both desktop and mobile devices", 
        technologies: ["React", "Node", "Socket.io"],
        image: '',
        github: "",
        live: "",
    },
    {
        id: 4,
        name: "Portfolio Site",
        description: "A modern, responsive portfolio website built using React and Tailwind CSS, showcasing personal projects, skills, and experiences. The site features smooth scrolling navigation powered by React Scroll for an engaging user experience. It is fully optimized for different screen sizes, ensuring a seamless interface across devices. The portfolio highlights clean design, performance, and easy navigation to leave a lasting impression on visitors.", 
        technologies: ["React", "Tailwind CSS", "React Scroll"],
        image: Portfolio,
        github: "https://github.com/AqsaAslam01/portfolio-site",
        live: "",
    },


]