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
            title: "SaaS Analytics Dashboard",
            description: "A comprehensive analytics dashboard for SaaS businesses with real-time data visualization.",
            image: "assets/project_1.png",
            tech: ["React", "Tailwind", "Chart.js"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            title: "Crypto Tracker Pro",
            description: "Real-time cryptocurrency tracking application with market analysis and portfolio management.",
            image: "assets/project_2.png",
            tech: ["JavaScript", "CoinGecko API", "CSS3"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            title: "Health & Fitness App",
            description: "A wellness application focusing on workout tracking, diet planning, and progress monitoring.",
            image: "assets/project_3.png",
            tech: ["HTML5", "CSS3", "JavaScript"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            title: "Food Delivery Platform",
            description: "A modern food delivery UI with seamless ordering experience and restaurant listings.",
            image: "assets/project_4.png",
            tech: ["React", "Tailwind", "Firebase"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            title: "Luxury Real Estate",
            description: "Premium property listing website featuring high-end homes and virtual tours.",
            image: "assets/project_5.png",
            tech: ["Next.js", "Tailwind", "MongoDB"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            title: "Travel Booking Hub",
            description: "An inspiring travel booking application for exploring and reserving dream destinations.",
            image: "assets/project_6.png",
            tech: ["Vue.js", "Tailwind", "Stripe"],
            liveLink: "#",
            githubLink: "#"
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

    testimonials: [
        {
            name: "Sarah Johnson",
            role: "CEO at TechStart",
            text: "Working with this developer was a game-changer for our startup. The attention to detail and clean code practices are unmatched. Highly recommended!",
            image: "https://i.pravatar.cc/150?img=1"
        },
        {
            name: "Michael Chen",
            role: "Product Manager",
            text: "Delivered our complex dashboard project ahead of schedule. The UI/UX improvements they suggested increased our user engagement significantly.",
            image: "https://i.pravatar.cc/150?img=11"
        },
        {
            name: "Emma Williams",
            role: "Design Lead",
            text: "A rare breed of developer who truly understands design. The pixel-perfect implementation of our Figma files was impressive.",
            image: "https://i.pravatar.cc/150?img=5"
        }
    ]
};
