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
    if(btn){
        btn.addEventListener("click", function () {
            const randomIndex = Math.floor(Math.random() * greetings.length);
            alert(greetings[randomIndex]);
        });
    }

    // ===== Dynamic Skills with Animated Bars =====
    const skills = [
        {name:"C Programming", level:90},
        {name:"Python (Learning)", level:60},
        {name:"JavaScript (Learning)", level:50},
        {name:"AI & Machine Learning Basics", level:70}
    ];
    const skillsList = document.getElementById("skills");
    if(skillsList){
        skillsList.innerHTML = "";
        skills.forEach(skill => {
            const li = document.createElement("li");
            li.className = "skill-item";

            const bar = document.createElement("div");
            bar.className = "skill-bar";

            const label = document.createElement("span");
            label.className = "skill-name";
            label.textContent = skill.name;

            li.appendChild(bar);
            li.appendChild(label);
            skillsList.appendChild(li);

            // Animate width
            setTimeout(() => {
                bar.style.width = skill.level + "%";
            }, 100);
        });
    }

    // ===== Dynamic Projects Section =====
    const projects = [
        {title:"AI Student Assistant", description:"A smart assistant that helps students plan their studies using AI.", tech:"Python, Machine Learning"},
        {title:"Personal Portfolio Website", description:"A dynamic portfolio website deployed using GitHub Pages.", tech:"HTML, CSS, JavaScript"},
        {title:"Smart Task Manager", description:"A task manager that prioritizes tasks using simple AI logic.", tech:"JavaScript"}
    ];
    const projectsDiv = document.getElementById("projects");
    if(projectsDiv){
        projectsDiv.innerHTML = "";
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
    }

    // ===== AI Skill Recommender =====
    const recommendBtn = document.getElementById("recommend-btn");
    const recommendationEl = document.getElementById("recommendation");
    const skillSelect = document.getElementById("skill-level");

    if(recommendBtn && recommendationEl && skillSelect){
        recommendBtn.addEventListener("click", function() {
            const level = skillSelect.value;
            let recommendation = "";
            if(level === "Beginner") recommendation = "Learn Python basics and try small projects.";
            else if(level === "Intermediate") recommendation = "Build simple web apps using JavaScript.";
            else if(level === "Advanced") recommendation = "Explore AI models and machine learning projects.";

            // Animate text appearance
            recommendationEl.textContent = "";
            recommendationEl.classList.remove("show");
            setTimeout(() => {
                recommendationEl.textContent = recommendation;
                recommendationEl.classList.add("show");
            }, 100);
        });
    }

});
