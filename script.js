const projectsContainer = document.getElementById('projects-container');

// Replace this with your actual project data
const projects = [
    { name: 'Project 1', description: 'Description of Project 1' },
    { name: 'Project 2', description: 'Description of Project 2' },
    { name: 'Project 3', description: 'Description of Project 3' }
];

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
    `;
    projectsContainer.appendChild(projectElement);
});
window.onload = changeBackgroundColor;
setInterval(changeBackgroundColor, 5000);
