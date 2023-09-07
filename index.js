import projectArray from './projects.json' assert { type: 'json' };

var projectIndex = 0;
var imageIndex = 0;
init()

function init()
{
    document.addEventListener('DOMContentLoaded', async function ()
    {
        let aboutMeButton = document.getElementById('about-me-button')
        let projectsButton = document.getElementById('projects-button')
        let scrollLeft = document.getElementById('scroll-left')
        let scrollRight = document.getElementById('scroll-right')
        let mediaScrollLeft = document.getElementById('media-scroll-left')
        let mediaScrollRight = document.getElementById('media-scroll-right')

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

        mediaScrollLeft.addEventListener("click", function ()
        {
            rotateImage(true)

        });

        mediaScrollRight.addEventListener("click", function ()
        {
            rotateImage()
        });

        updateImage()
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

function rotateImage(left = false)
{
    let currentProject = projectArray[projectIndex];

    if (left)
    {
        imageIndex = Math.max(imageIndex - 1, 0)
    }
    else
    {
        imageIndex = Math.min(imageIndex + 1, currentProject.mediaLinks.length - 1)
    }

    updateImage()
}

function updateImage()
{
    let currentProject = projectArray[projectIndex];
    let currentImageElement = document.getElementById('current-image')
    let currentImageLink = currentProject.mediaLinks[imageIndex]
    console.log(currentProject.mediaLinks, imageIndex, currentProject.mediaLinks[imageIndex])

    currentImageElement.src = currentImageLink;
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