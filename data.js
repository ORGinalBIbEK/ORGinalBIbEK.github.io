// data.js - Contains all the structured data for the portfolio

const portfolioData = {
    skills: {
        frontend: [
            { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
            { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
            { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-400" },
            { name: "React", icon: "fab fa-react", color: "text-cyan-400" },
            { name: "Tailwind CSS", icon: "fas fa-wind", color: "text-teal-400" }
        ],
        backend: [
            { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
            { name: "Express", icon: "fas fa-server", color: "text-gray-400" },
            { name: "FastAPI", icon: "fas fa-bolt", color: "text-teal-500" },
            { name: "MongoDB", icon: "fas fa-database", color: "text-green-600" },
            { name: "Python", icon: "fab fa-python", color: "text-blue-400" }
        ],
        tools: [
            { name: "Git", icon: "fab fa-git-alt", color: "text-red-500" },
            { name: "GitHub", icon: "fab fa-github", color: "text-gray-800 dark:text-white" },
            { name: "Figma", icon: "fab fa-figma", color: "text-purple-500" },
           { name: "Adobe Photoshop", icon: "fas fa-palette", color: "text-blue-600" },
            { name: "VS Code", icon: "fas fa-code", color: "text-blue-500" }
        ]
    },
    
    projects: [
        {
            title: "Software Fellowship Program",
            description: "4 days intensive workshop on software development,covering frontend,backend and deployment",
            image: "assets/softwarefellowship.png",
            tech: ["HTML", "JavaScript", "Git","Github","Deployment"],
            //liveLink: "#",
            //githubLink: "#"
        },
        {
            title: "Movie App",
            description: "A simple movie browsing application with search and filterring capabilities.",
            image: "assets/1_t98V5s6uNKVNEde5ZYQemw.jpg",
            tech: ["JavaScript", "React", "Tailwind"],
            liveLink: "#",
            githubLink: "https://github.com/ORGinalBIbEK/movie_app"
        },
                {
            title: "Student Management System",
            description: "A comprehensive system for managing student information and academic records..",
            image: "assets/What-is-MIS.webp",
            tech: ["C","SQL"],
            liveLink: "#",
            githubLink: "https://github.com/ORGinalBIbEK/C-project-MIS-"
        },
        {
            title: "Technorian",
            description: "Been a volunteer for Technorian organized by ARC",
            image: "assets/images.png",
            //tech: ["HTML5", "CSS3", "JavaScript"],
            //liveLink: "#",
            //githubLink: "#"
        },
        {
            title: "AI Resume Builder",
            description: "An AI-powered resume builder that generates professional resume based on user input.",
            image: "assets/original-161c7cc4182d64d0c75555f686d780cc.webp",
            tech: ["React", "Tailwind", "Vercel"],
            liveLink: "#",
            githubLink: "https://github.com/ORGinalBIbEK/resume_builder"
        }

    ],

    services: [
        {
            title: "Web Development",
            description: "Building responsive, fast, and scalable web applications using modern technologies.",
            icon: "fas fa-laptop-code"
        },
        {
            title: "UI/UX Design",
            description: "Creating intuitive, user-centric interfaces with a focus on stunning visual aesthetics.",
            icon: "fas fa-paint-brush"
        },
        {
            title: "Machine Learning",
            description: "Learning and implementing machine learning algorithms to solve complex problems and exploratory data analysis",
            icon: "fas fa-brain"

        },
        {
            title: "Database Management",
            description: "Structuring and optimizing databases for high performance and reliability.",
            icon: "fas fa-database"
        }
    ],
};
