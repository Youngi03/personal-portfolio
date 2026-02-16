document.addEventListener("DOMContentLoaded", function () {
    const greetings = [
        "Hello, I'm Raphael — aspiring software engineer and AI enthusiast!",
        "Welcome! I enjoy building web and mobile apps with AI tools.",
        "Hi there! My skills include C, Python, JavaScript, and Machine Learning.",
        "Hey! I’m working toward becoming a top computer science professional."
    ];

    const btn = document.getElementById("btn");

    if (!btn) {
        console.log("Button not found");
        return;
    }

    btn.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * greetings.length);
        alert(greetings[randomIndex]);
    });
});
// Projects data
const projects = [
    {
        title: "AI Student Assistant",
        description: "A smart assistant that helps students with study planning and questions using AI concepts.",
        tech: "Python, Machine Learning"
    },
    {
        title: "Personal Portfolio Website",
        description: "A responsive personal portfolio showcasing my skills, projects, and AI interests.",
        tech: "HTML, CSS, JavaScript"
    },
    {
        title: "Smart Task Manager",
        description: "A task manager that prioritizes tasks based on deadlines and simple AI logic.",
        tech: "JavaScript"
    }
];

// Get projects container
const projectsDiv = document.getElementById("projects");

// Create project cards dynamically
projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.textContent = project.description;

    const tech = document.createElement("small");
    tech.textContent = "Tech: " + project.tech;

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(tech);

    projectsDiv.appendChild(card);
});
