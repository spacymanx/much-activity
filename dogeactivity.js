document.addEventListener("DOMContentLoaded", function () {
  const projectContainers = document.querySelectorAll(".project-container");
  const projectIcons = document.querySelectorAll(".project-icon");
  let userHasClicked = false;
  const defaultProjectId = "project1"; // Change this to your desired default project

  function closeAllProjects() {
      projectContainers.forEach(container => {
          container.style.display = "none";
      });
  }

  function handleProjectClick(projectId) {
      userHasClicked = true;
      closeAllProjects();
      const project = document.getElementById(projectId);
      if (project) {
          project.style.display = "block";
      }
  }

  // Attach click event listeners to icons
  projectIcons.forEach(icon => {
      icon.addEventListener("click", function () {
          const projectId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
          handleProjectClick(projectId);
      });
  });

  function getRandomProject() {
      const randomIndex = Math.floor(Math.random() * projectContainers.length);
      return projectContainers[randomIndex];
  }

  function toggleRandomProject() {
      if (!userHasClicked) {
          closeAllProjects();
          const randomProject = getRandomProject();
          randomProject.style.display = "block";
      }
  }

  // Set the default project on page load
  closeAllProjects();
  document.getElementById(defaultProjectId).style.display = "block";

  // Randomly open/close projects every 5 seconds if user hasn't clicked
  setInterval(toggleRandomProject, 3000);
});

