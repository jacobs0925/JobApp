import projectArray from './projects.json' assert { type: 'json' };

var projectIndex = 0;
init()

function init()
{
    document.addEventListener('DOMContentLoaded', async function ()
    {
        let aboutMeButton = document.getElementById('about-me-button')
        let projectsButton = document.getElementById('projects-button')
        let scrollLeft = document.getElementById('scroll-left')
        let scrollRight = document.getElementById('scroll-right')

        aboutMeButton.addEventListener("click", function ()
        {
            let aboutMeDiv = document.getElementById('about-me')
            aboutMeDiv.scrollIntoView({ behavior: 'smooth' });

        });

        projectsButton.addEventListener("click", function ()
        {
            let projectDiv = document.getElementById('project-page')
            projectDiv.scrollIntoView({ behavior: 'smooth' });
        });

        scrollLeft.addEventListener("click", function ()
        {
            rotateProject(true)

        });

        scrollRight.addEventListener("click", function ()
        {
            rotateProject()
        });

        updateProject()
    });
}

function rotateProject(left = false)
{
    if (left)
    {
        projectIndex = Math.max(projectIndex - 1, 0)
    }
    else
    {
        projectIndex = Math.min(projectIndex + 1, projectArray.length - 1)
    }

    updateProject()
}

function updateProject()
{
    let currentProject = projectArray[projectIndex];
    let projectTitle = document.getElementById('project-title')
    let projectSummary = document.getElementById('project-summary')
    let projectMedia = document.getElementById('project-media')

    projectTitle.textContent = currentProject['title']
    projectTitle.href = currentProject['projectLink']
    projectSummary.textContent = currentProject['summary']
    projectMedia.mediaLinks = currentProject['mediaLinks']
}