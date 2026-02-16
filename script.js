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
