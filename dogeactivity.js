document.addEventListener("DOMContentLoaded", function () {
    const projectContainers = document.querySelectorAll(".project-container");
    const projectIcons = document.querySelectorAll(".project-icon");
    let userHasInteracted = false;
    const defaultProjectId = "dogecoin-core"; // Set your default open project

    function closeAllProjects() {
        projectContainers.forEach(container => {
            container.style.display = "none";
        });
        projectIcons.forEach(icon => {
            icon.classList.remove("active-icon");
        });
    }

    function openProject(projectId) {
        userHasInteracted = true; // Stop auto-cycling if user interacts
        closeAllProjects();
        const project = document.getElementById(projectId);
        if (project) {
            project.style.display = "block";
            highlightIcon(projectId);
        }
    }

    function highlightIcon(projectId) {
        projectIcons.forEach(icon => {
            const iconProjectId = icon.getAttribute("data-project-id");
            if (iconProjectId === projectId) {
                icon.classList.add("active-icon");
            }
        });
    }

    function getRandomProject() {
        const randomIndex = Math.floor(Math.random() * projectContainers.length);
        return projectContainers[randomIndex];
    }

    function toggleRandomProject() {
        if (!userHasInteracted) {
            closeAllProjects();
            const randomProject = getRandomProject();
            randomProject.style.display = "block";
            highlightIcon(randomProject.id);
        }
    }

    // Attach event listeners for hover effect
    projectIcons.forEach(icon => {
        const projectId = icon.getAttribute("data-project-id");

        icon.addEventListener("mouseenter", () => {
            openProject(projectId);
        });

        icon.addEventListener("click", () => {
            openProject(projectId);
        });
    });

    // Set default project on page load
    closeAllProjects();
    document.getElementById(defaultProjectId).style.display = "block";
    highlightIcon(defaultProjectId);

    // Random cycling every 2.5 seconds unless user interacts
    setInterval(toggleRandomProject, 2000);
});
