document.addEventListener("DOMContentLoaded", function () {

    // ===== Typing Intro =====
    const typingText = "Hi, I'm Raphael — AI & Web Dev enthusiast!";
    const typingElement = document.getElementById("typing");
    let index = 0;
    function typeEffect() {
        if (index < typingText.length) {
            typingElement.textContent += typingText.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    // ===== Dynamic Greeting Button =====
    const greetings = [
        "Hello! I’m Raphael, building intelligent web & mobile apps.",
        "Welcome! I code, learn AI, and love web development.",
        "Hi there! I enjoy C, Python, JavaScript, and AI.",
        "Hey! I’m aiming to become a top computer science professional."
    ];
    const btn = document.getElementById("btn");
    btn.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * greetings.length);
        alert(greetings[randomIndex]);
    });

    // ===== Dynamic Skills Section =====
    const skills = [
        "C Programming",
        "Python (Learning)",
        "JavaScript (Learning)",
        "AI & Machine Learning Basics"
    ];
    const skillsList = document.getElementById("skills");
    skillsList.innerHTML = ""; // clear old items
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // ===== Dynamic Projects Section =====
    const projects = [
        {
            title: "AI Student Assistant",
            description: "A smart assistant that helps students plan their studies using AI.",
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
    projectsDiv.innerHTML = ""; // clear old project cards
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

    // ===== AI Skill Recommender =====
    document.getElementById("recommend-btn").addEventListener("click", function() {
        const level = document.getElementById("skill-level").value;
        let recommendation = "";
        if(level === "Beginner") recommendation = "Learn Python basics and try small projects.";
        else if(level === "Intermediate") recommendation = "Build simple web apps using JavaScript.";
        else if(level === "Advanced") recommendation = "Explore AI models and machine learning projects.";
        document.getElementById("recommendation").textContent = recommendation;
    });

});
