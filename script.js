// Handle mobile navigation
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500);
});
function hamburg() {
    document.querySelector(".dropdown").style.transform = "translateY(0%)";
}

function cancel() {
    document.querySelector(".dropdown").style.transform = "translateY(-100%)";
}

// Typewriter Effect
const words = ["Data Analyst", "Data Engineer", "BI Developer"];
let wordIndex = 0;
let charIndex = 0;
let typingElement = document.querySelector(".typewriter span");

function typeEffect() {
    if (charIndex <= words[wordIndex].length) {
        typingElement.innerHTML = words[wordIndex].substring(0, charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex >= 0) {
        typingElement.innerHTML = words[wordIndex].substring(0, charIndex);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500);
});

//skill section//

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".skills-slider");
    const dotsContainer = document.querySelector(".slider-dots");
    const skills = document.querySelectorAll(".skill-box");
    let index = 0;

    // Create navigation dots
    for (let i = 0; i < Math.ceil(skills.length / 5); i++) {
        let dot = document.createElement("span");
        dot.addEventListener("click", () => moveSlide(i));
        dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll("span");
    dots[0].classList.add("active");

    function moveSlide(position) {
        index = position;
        slider.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    // Auto Slide every 4 seconds
    setInterval(() => {
        index = (index + 1) % dots.length;
        moveSlide(index);
    }, 4000);
});
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({ offset: 100, duration: 1000 });
});
//experience section//
// Function to toggle Experience Details
function toggleDetails(element) {
    const allSteps = document.querySelectorAll(".timeline-step");

    // Close all other steps
    allSteps.forEach(step => {
        if (step !== element) {
            step.classList.remove("active");
            step.querySelector(".details").style.display = "none";
        }
    });

    // Toggle the clicked step
    if (element.classList.contains("active")) {
        element.classList.remove("active");
        element.querySelector(".details").style.display = "none";
    } else {
        element.classList.add("active");
        element.querySelector(".details").style.display = "block";
    }
}

// Function to close all details when clicking outside
document.addEventListener("click", function (event) {
    const timeline = document.querySelector(".vertical-timeline");
    const allSteps = document.querySelectorAll(".timeline-step");

    // Check if click was outside the timeline
    if (!timeline.contains(event.target)) {
        allSteps.forEach(step => {
            step.classList.remove("active");
            step.querySelector(".details").style.display = "none";
        });
    }
});

// Initialize AOS Animations
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({ offset: 100, duration: 1000 });
});
//project section//
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({ offset: 100, duration: 1000 });
});

//contact section//
document.querySelector(".contact-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const formMessage = document.querySelector("#form-message");

    // Convert form data to JSON
    const formData = new FormData(form);
    
    const response = await fetch(form.action, {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    if (result.success) {
        formMessage.style.display = "block";
        formMessage.style.color = "green";
        formMessage.textContent = "✅ Your message has been sent successfully!";
        form.reset();
    } else {
        formMessage.style.display = "block";
        formMessage.style.color = "red";
        formMessage.textContent = "❌ Error sending message. Please try again.";
    }
});
function toggleSkills() {
    var skillsList = document.querySelector(".skills-list");
    var btn = document.querySelector(".view-all-btn");

    // Toggle visibility
    if (skillsList.style.display === "block") {
        skillsList.style.display = "none";
        document.removeEventListener("click", closeOnClickOutside); // Remove event listener
    } else {
        skillsList.style.display = "block";
        setTimeout(() => {
            document.addEventListener("click", closeOnClickOutside);
        }, 100); // Delay to prevent immediate closure
    }
}

// Function to close when clicking outside
function closeOnClickOutside(event) {
    var skillsList = document.querySelector(".skills-list");
    var btn = document.querySelector(".view-all-btn");

    if (!skillsList.contains(event.target) && !btn.contains(event.target)) {
        skillsList.style.display = "none";
        document.removeEventListener("click", closeOnClickOutside); // Remove event listener after closing
    }
}
