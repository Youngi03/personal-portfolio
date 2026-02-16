document.addEventListener("DOMContentLoaded", () => {

    /* ===== Typing Intro ===== */
    const text = "Hi, I'm Raphael — AI & Web Developer";
    const typing = document.getElementById("typing");
    let i = 0;

    function type() {
        if (i < text.length) {
            typing.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();

    /* ===== Greeting Button ===== */
    document.getElementById("btn").onclick = () =>
        alert("Welcome! I build intelligent and modern applications 🚀");

    /* ===== Skills ===== */
    const skills = [
        { name: "C Programming", level: 90 },
        { name: "Python", level: 60 },
        { name: "JavaScript", level: 55 },
        { name: "AI & ML Basics", level: 70 }
    ];

    const skillsList = document.getElementById("skills");
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.className = "skill-item";

        const bar = document.createElement("div");
        bar.className = "skill-bar";

        const label = document.createElement("span");
        label.className = "skill-name";
        label.textContent = skill.name;

        li.append(bar, label);
        skillsList.appendChild(li);

        setTimeout(() => bar.style.width = skill.level + "%", 200);
    });

    /* ===== Projects ===== */
    const projects = [
        { title: "AI Student Assistant", tech: "Python, ML" },
        { title: "Personal Portfolio", tech: "HTML, CSS, JS" },
        { title: "Smart Task Manager", tech: "JavaScript" }
    ];

    const projectsDiv = document.getElementById("projects");
    projects.forEach(p => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `<h3>${p.title}</h3><p>${p.tech}</p>`;
        projectsDiv.appendChild(card);
    });

    /* ===== AI RECOMMENDER ===== */
    document.getElementById("recommend-btn").onclick = () => {
        const level = document.getElementById("skill-level").value;
        const rec = document.getElementById("recommendation");

        rec.textContent =
            level === "Beginner" ? "Start with Python & logic building." :
            level === "Intermediate" ? "Build real web apps using JS." :
            "Focus on ML models & system design.";
    };

    /* ===== DARK MODE ===== */
    document.getElementById("dark-toggle").onclick = () =>
        document.body.classList.toggle("dark");
});
