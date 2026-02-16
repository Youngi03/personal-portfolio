document.addEventListener("DOMContentLoaded", function () {

    // ===== Typing Intro =====
    const typingText = "Hi, I'm Raphael — AI & Web enthusiast, building dynamic apps and portfolios!";
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

    // ===== Skills List =====
    const skills = [
        "C Programming",
        "Python (Learning)",
        "JavaScript (Learning)",
        "AI & Machine Learning Basics"
    ];

    const skillsList = document.getElementById("skills");
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // ===== Project Cards =====
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

    // ===== AI Skill Recommender =====
    document.getElementById("recommend-btn").addEventListener("click", function() {
        const level = document.getElementById("skill-level").value;
        let recommendation = "";

        if(level === "Beginner") recommendation = "Learn Python basics and simple projects.";
        else if(level === "Intermediate") recommendation = "Try building small web apps with JavaScript.";
        else if(level === "Advanced") recommendation = "Explore AI models and machine learning projects.";

        document.getElementById("recommendation").textContent = recommendation;
    });

    // ===== AI Skill Pathfinder =====
    document.getElementById("suggest-skill-btn").addEventListener("click", function() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const selected = Array.from(checkboxes).map(cb => cb.value);
        let suggestion = "";

        if(selected.includes("Python") && !selected.includes("AI Basics")){
            suggestion = "Try learning AI Basics next!";
        } else if(selected.includes("JavaScript") && !selected.includes("Web Apps")){
            suggestion = "Build small web apps to practice JavaScript.";
        } else if(selected.length === 0){
            suggestion = "Select at least one skill!";
        } else {
            suggestion = "Explore advanced topics or combine multiple skills!";
        }

        document.getElementById("suggestion").textContent = suggestion;
    });

});
