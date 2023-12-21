document.addEventListener("DOMContentLoaded", function() {
    // List of your GitHub repositories as an array
    const repositories = [
        { name: "Repository Name 1", url: "https://github.com/yourusername/repo1" },
        { name: "Repository Name 2", url: "https://github.com/yourusername/repo2" },
        // Add more repositories here
    ];

    const projectList = document.getElementById("project-list");

    repositories.forEach(repo => {
        const listItem = document.createElement("div");
        listItem.innerHTML = `<h3>${repo.name}</h3><a href="${repo.url}">${repo.url}</a>`;
        projectList.appendChild(listItem);
    });
});