const greetings = [
    "Hello, I'm Raphael — aspiring software engineer and AI enthusiast!",
    "Welcome! I love building smart web and mobile apps.",
    "Hi there! Check out my skills in C, Python, JavaScript, and AI.",
    "Hey! I’m working on projects that combine AI with real-world applications."
];

document.getElementById("btn").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    alert(greetings[randomIndex]);
});
