document.addEventListener("DOMContentLoaded", () => {
  // Simple dynamic greeting in the hero section, if present
  const greetingEl = document.querySelector("[data-greeting]");
  if (greetingEl) {
    const hour = new Date().getHours();
    let greeting = "Hello";

    if (hour >= 5 && hour < 12) greeting = "Good morning";
    else if (hour >= 12 && hour < 18) greeting = "Good afternoon";
    else greeting = "Good evening";

    greetingEl.textContent = greeting + ",";
  }

  // Tiny effect: log page name for demo purposes
  console.log("CI/CD demo page loaded:", document.title);
});
