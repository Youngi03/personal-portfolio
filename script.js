document.addEventListener("DOMContentLoaded", function () {

   // Typing Intro
const typingText = "Hi, I'm Raphael — AI & Web enthusiast, building dynamic apps and portfolios!";
const typingElement = document.getElementById("typing");
let index = 0;

function typeEffect() {
    if (index < typingText.length) {
        typingElement.textContent += typingText.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // 100ms per letter
    }
}

typeEffect();

}

typeEffect();

    // ===== Dynamic Greeting =====
    const greetings = [
        "Hello, I'm Raphael — aspiring software engineer and AI enthusiast!",
        "Welcome! I enjoy building web and mobile apps with AI tools.",
        "Hi there! My skills include C, Python, JavaScript, and Machine Learning.",
        "Hey! I’m working toward becoming a top computer science professional."
    ];

    const btn = document.getElementById("btn");
    btn.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * greetings.length);
        alert(greetings[randomIndex]);
    });

    // ===== Skills Section =====
    const skills = [
        "C (Strong)",
        "Python (Beginner)",
        "JavaScript (Beginner)",
        "Data Structures & Algorithms",
        "Machine Learning & AI",
        "Git & GitHub",
        "Web & App Development"
    ];

    const skillsList = document.getElementById("skills");
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // ===== Projects Section =====
    const projects = [
        {
            title: "AI Student Assistant",
            description: "A smart assistant that helps students with study planning using AI concepts.",
            tech: "Python, Machine Learning"
        },
        {
            title: "Personal Portfolio Website",
            description: "A dynamic portfolio website deployed using GitHub Pages.",
            tech: "HTML, CSS, JavaScript"
        },
        {
            title: "Smart Task Manager",
            description: "A task manager that prioritizes tasks using simple AI logic.",
            tech: "JavaScript"
        }
    ];

    const projectsDiv = document.getElementById("projects");
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

});
