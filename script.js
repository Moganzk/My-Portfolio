// This file contains JavaScript functionality for the portfolio. 

// Function to dynamically load projects from GitHub
async function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    const response = await fetch('https://api.github.com/users/Moganzk/repos');
    const projects = await response.json();

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description || 'No description available.'}</p>
            <a href="${project.html_url}" target="_blank">View Project</a>
        `;

        projectsContainer.appendChild(projectElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects-container');
    const githubUsername = 'Moganzk';

    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated`)
        .then(response => response.json())
        .then(repos => {
            projectsContainer.innerHTML = '';
            repos
                .filter(repo => repo.description && repo.description.trim() !== '')
                .forEach(repo => {
                    const project = document.createElement('div');
                    project.className = 'project-card';
                    project.innerHTML = `
                        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                        <p>${repo.description}</p>
                        <span>⭐ ${repo.stargazers_count}</span>
                    `;
                    projectsContainer.appendChild(project);
                });
        })
        .catch(error => {
            projectsContainer.innerHTML = '<p>Unable to load projects from GitHub.</p>';
            console.error(error);
        });
});

// Function to handle form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    // Here you can add functionality to send the form data to a server or an email service
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset(); // Reset the form after submission
});

// Load projects when the page is fully loaded
window.onload = loadProjects;