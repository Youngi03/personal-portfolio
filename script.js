// Typing intro
const text = "AI Study Planner";
let index = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Greeting button
document.getElementById("greetBtn").addEventListener("click", () => {
  document.getElementById("greeting").textContent =
    "Hello Raphael 👋 Welcome to your AI-powered journey!";
});

// Dynamic skills
const skills = [
  "C Programming",
  "Python (Learning)",
  "JavaScript (Learning)",
  "AI & Machine Learning Basics"
];

const skillsList = document.getElementById("skillsList");

skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

// AI Skill Recommender
document.getElementById("recommendBtn").addEventListener("click", () => {
  const beginner = document.getElementById("beginner").checked;
  const output = document.getElementById("recommendation");

  if (beginner) {
    output.textContent =
      "Recommendation: Focus on JavaScript fundamentals and basic Python for AI.";
  } else {
    output.textContent =
      "Recommendation: Move to data structures and introductory machine learning.";
  }
});
