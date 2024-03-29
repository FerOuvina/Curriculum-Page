// Getting the elements
let projectsContainer = document.querySelector("[data-projectsContainer]");
let projectsBtn = document.querySelector("[data-btn]");

// Adding event listener to the button
let buttonState = 0;
projectsBtn.addEventListener("click", function () {
  if (buttonState === 0) {
    projectsBtn.style.marginBottom = 0;
    projectsContainer.classList.remove("hidden");
    setTimeout(function () {
      projectsContainer.classList.add("shown");
      projectsBtn.innerHTML = "Show Less";
    }, 200);
    buttonState = 1;
  } else if (buttonState === 1) {
    projectsContainer.classList.remove("shown");
    setTimeout(function () {
      projectsContainer.classList.add("hidden");
      projectsBtn.style.marginBottom = "1rem";
      projectsBtn.innerHTML = "Show More";
    }, 400);
    buttonState = 0;
  }
});
