import { getNode } from './DBManager.js';

let projectArray = await getNode("projects");
let mobile = false;
var stackMap = {
    "lambda":
    {
        "alt": "AWS Lambda",
        "link": "images/lambda.jpg"
    },
    "firebase":
    {
        "alt": "Firebase",
        "link": "images/firebase.png"
    },
    "dynamo":
    {
        "alt": "AWS DynamoDB",
        "link": "images/dynamodb.png"
    },
    "html":
    {
        "alt": "HTML",
        "link": "images/html.png"
    },
    "python":
    {
        "alt": "Python",
        "link": "images/python.png"
    },
    "css":
    {
        "alt": "CSS",
        "link": "images/css.png"
    },
    "rest":
    {
        "alt": "REST",
        "link": "images/rest.webp"
    },
    "github":
    {
        "alt": "Github",
        "link": "images/github.png"
    },
    "salesforce":
    {
        "alt": "Salesforce",
        "link": "images/salesforce.png"
    },
    "js":
    {
        "alt": "Javascript",
        "link": "images/js.png"
    },
    "java":
    {
        "alt": "Java",
        "link": "images/java.png"
    },
    "graphql":
    {
        "alt": "graphQL",
        "link": "images/graphql.png"
    },
    "s3":
    {
        "alt": "AWS S3",
        "link": "images/s3.png"
    }
}

await init()
async function init()
{
    if (window.innerWidth < 480)
    {
        mobile = true;
    }
    let right = false
    let first = true
    for (let index in projectArray)
    {

        let project = projectArray[index]
        let vals = loadProjects(project, right ^= true, first)
        if (vals)
        {
            createSlider(vals, project)
        }
        if (first)
        {
            first = false
        }
    }
    var toggleElements = document.querySelectorAll('.toggle-stack');

    // Loop through each element and add a click event listener
    toggleElements.forEach(function (toggleElement)
    {
        toggleElement.addEventListener('click', function ()
        {
            var stack = toggleElement.nextElementSibling;
            if (stack.style.display === 'grid')
            {
                toggleElement.innerHTML = "Show Project Stack"
                stack.style.display = 'none';
            } else
            {
                toggleElement.innerHTML = "Hide Project Stack"
                stack.style.display = 'grid';

            }
        });
    });
}

function createSlider(results, project)
{
    let [scrollImg1, currentImage, scrollImg2] = results
    let currentIndex = 0
    let projectLinks = project['mediaLinks'];

    scrollImg1.addEventListener('click', function ()
    {
        if (currentIndex == 0)
        {
            currentIndex = projectLinks.length - 1
        }
        else
        {
            currentIndex--
        }
        currentImage.src = projectLinks[currentIndex]
    })

    scrollImg2.addEventListener('click', function ()
    {
        if (currentIndex == projectLinks.length - 1)
        {
            currentIndex = 0
        }
        else
        {
            currentIndex++
        }
        currentImage.src = projectLinks[currentIndex]
    })
}

function loadProjects(project, right, first)
{
    let projectPage = document.getElementById('project-page')
    let entryBody = document.createElement('div');
    let toReturn = null
    entryBody.className = "project-entry-container"
    entryBody.style.justifyContent = right ? "right" : "left"
    if (first)
    {
        entryBody.id = 'first-project'
    }

    let projectContainer = document.createElement('div');
    projectContainer.className = "project-container"

    let title = document.createElement('a');
    title.innerHTML = project['title'];
    title.title = 'View project on Github'
    title.target = "_blank";
    title.className = "title"
    title.href = (project['projectLink']) ? project['projectLink'] : project['githubLink']

    let projectBody = document.createElement('div')
    projectBody.className = 'project-body'

    if (project.mediaLinks)
    {


        let slidingMedia = document.createElement('div')
        slidingMedia.className = 'sliding-media'

        let scrollDiv1 = document.createElement('div')
        scrollDiv1.className = "scroll"

        let scrollImg1 = document.createElement('img')
        scrollImg1.className = "scroll-img"
        scrollImg1.src = "./images/scrollLeft.png"

        let scrollDiv2 = document.createElement('div')
        scrollDiv2.className = "scroll"

        let scrollImg2 = document.createElement('img')
        scrollImg2.className = "scroll-img"
        scrollImg2.src = "./images/scrollRight.png"

        let imageContainer = document.createElement('div')
        imageContainer.className = 'image-container'

        let currentImage = document.createElement('img')
        currentImage.className = "current-image"
        currentImage.src = project.mediaLinks[0]

        slidingMedia.appendChild(scrollDiv1)
        slidingMedia.appendChild(imageContainer)
        slidingMedia.appendChild(scrollDiv2)

        scrollDiv1.appendChild(scrollImg1)
        scrollDiv2.appendChild(scrollImg2)
        imageContainer.appendChild(currentImage)
        projectBody.appendChild(slidingMedia)

        toReturn = [scrollImg1, currentImage, scrollImg2]

    }

    let scrollbar = document.createElement('div')
    scrollbar.classList.add("scrollbar", "scrollbar-primary", "project-scroll")

    let summary = document.createElement('div')
    summary.className = "summary"
    summary.innerHTML = project.summary

    let buttonContainer = document.createElement('div')
    buttonContainer.className = "button-container"

    if (project.githubLink)
    {
        let buttonText = document.createElement('div')
        buttonText.className = "about-me-button-text"
        buttonText.innerHTML = "Github"

        let button = document.createElement('button')
        button.type = "button"
        button.classList.add("about-me-button", "btn", "btn-primary", "project-button")
        button.addEventListener('click', function ()
        {
            window.open(project['githubLink'], '_blank');
        })
        button.appendChild(buttonText)
        buttonContainer.appendChild(button)
    }

    if (project.projectLink)
    {
        let buttonText = document.createElement('div')
        buttonText.className = "about-me-button-text"
        buttonText.innerHTML = "Visit"

        let button = document.createElement('button')
        button.type = "button"
        button.classList.add("about-me-button", "btn", "btn-primary", "project-button")
        button.addEventListener('click', function ()
        {
            window.open(project['projectLink'], '_blank');
        })

        button.appendChild(buttonText)
        buttonContainer.appendChild(button)
    }
    scrollbar.appendChild(summary)

    projectBody.appendChild(scrollbar)

    projectContainer.appendChild(title)
    projectContainer.appendChild(projectBody)

    if (project.projectLink || project.githubLink)
    {
        projectContainer.appendChild(buttonContainer)
    }
    entryBody.appendChild(projectContainer)

    projectPage.appendChild(entryBody)

    if (right && !mobile)
    {
        const container = projectBody
        const children = container.children;
        const childrenArray = Array.from(children);
        const reversedChildrenArray = childrenArray.reverse();

        container.innerHTML = '';
        reversedChildrenArray.forEach(child =>
        {
            container.appendChild(child);
        });
    }
    let stackContainer = document.createElement('div')
    stackContainer.className = "tech-stack-container"

    let stackToggle = document.createElement('div')
    stackToggle.className = "toggle-stack"
    stackToggle.innerHTML = "Show Project Stack"

    let stackGrid = document.createElement('div')
    stackGrid.className = "tech-stack-grid"

    stackContainer.appendChild(stackToggle)
    stackContainer.appendChild(stackGrid)

    let stackLinks = project['stackLinks']
    stackLinks = stackLinks.filter(value => value !== null);
    if (stackLinks)
    {
        for (let link of stackLinks)
        {
            if (link)
            {
                let gridItem = document.createElement('img')
                gridItem.className = "tech-stack-grid-item"
                gridItem.title = stackMap[link]['alt']
                gridItem.src = stackMap[link]['link']
                stackGrid.appendChild(gridItem)
            }
        }
    }
    let columnsMax = mobile ? 3 : 7
    const columns = Math.min(stackLinks.length, columnsMax)
    stackGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
    projectContainer.appendChild(stackContainer)

    return toReturn
}