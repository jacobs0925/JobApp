import React, { useState, useRef } from 'react';

var ReactDOM = require('react-dom');
var projects = []

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
    },
    "react":
    {
        "alt": "React",
        "link": "images/react.jpg"
    }
}

var filters = []
var currentProjects = []

function PageHeader()
{
    return (
        <div class="header">
            <div class="header-link-container">
                <a href="./index.html" class="header-link bounce">
                    home
                </a>
                <a href="./projects.html" class="header-link bounce">
                    projects
                </a>
            </div>
            <div class="pic-and-links">
                <div class="links">

                    <a target="_blank" class="social-link" title="Github" href="https://github.com/jacobs0925">
                        <img class="img-responsive rounded-circle image" src="./images/github.png"></img>
                    </a>

                    <a target="_blank" class="social-link" title="LinkedIn" href="https://www.linkedin.com/in/jjschwar/">
                        <img class="img-responsive rounded-circle image" src="./images/linkedin.png"></img>
                    </a>

                    <a target="_blank" class="social-link" title="Resume" href="./Resume_New.pdf">
                        <img class="img-responsive rounded-circle image" src="./images/reusme.png"></img>
                    </a>

                </div>
            </div>
        </div>
    )
}

function getRelevantProjects()
{
    if (filters.length == 0)
    {
        return projects
    }

    let projectsToReturn = []
    for (let project of projects)
    {
        for (let filter of filters)
        {
            if (project.stackLinks.includes(filter))
            {
                projectsToReturn.push(project)
                break
            }
        }
    }
    return projectsToReturn
}

function updateFilters(add, id)
{
    if (add)
    {
        filters.push(id)
    }
    else
    {
        let index = filters.indexOf(id);
        filters.splice(index, 1);
    }
    let mainProjectsContainer = document.getElementById('project-page')
    mainProjectsContainer.innerHTML = ""
    currentProjects = []

    let newProjects = getRelevantProjects()
    for (let project of newProjects)
    {
        let projectContainer = document.createElement('div')
        ReactDOM.render(<Project project={project} />, projectContainer);
        mainProjectsContainer.appendChild(projectContainer)
    }
    currentProjects = newProjects

    let tableContents = document.getElementById('table-contents')
    ReactDOM.render(<Table />, tableContents);
}
function createStackItems(project, clickable)
{
    const techStack = [];
    for (let item of project.stackLinks)
    {
        let itemData = stackMap[item];
        itemData['id'] = item

        if (clickable)
        {

            techStack.push(<TechStackItem itemData={itemData} />);
        }
        else
        {
            techStack.push(<ProjectTechStackItem itemData={itemData} />);
        }
    }
    return techStack;
};

function DialogBox({ element, text, position })
{
    let style = { top: -32, right: 340 - element.offsetWidth }
    if (position == "top-left")
    {
        //default
    }
    else if (position == "top-right")
    {
        style = { top: -32, left: 340 - element.offsetWidth }
    } else if (position == "bottom-right")
    {
        style = { bottom: -32, left: 340 - element.offsetWidth }
    } else if (position == "bottom-left")
    {
        style = { bottom: -32, right: 340 - element.offsetWidth }
    }
    const dialogRef = useRef(null);
    let closeDialog = () =>
    {
        const dialog = dialogRef.current;
        if (dialog)
        {
            dialog.classList.add('fade-out'); // Apply the fade-out effect
            setTimeout(() =>
            {
                dialog.remove(); // Remove after transition ends
            }, 500); // Duration should match the transition duration
        }
    }
    return (                                                                                           //340 = width -10 to account for 1vh padding
        <div ref={dialogRef} onClick={closeDialog} className='dialog-box' style={style}>
            {console.log(dialogRef.current)}
            <div className='dialog-content'>
                {text}
            </div>
        </div>
    )
}

function TechStack({ project })
{

    return (
        <div className='tech-stack'>
            <div className='tech-stack-header'>
                Tech Filter
            </div>
            <div className='tech-stack-body'>
                <div className='tech-stack-scrollbar tech-scroll'>
                    {createStackItems(project, true)}
                </div>
            </div>
            <div className='tech-stack-footer'>
            </div>
        </div>
    )
}

function TechStackItem({ itemData })
{
    let [selected, setSelected] = useState(false);

    let toggleSelected = () =>
    {
        setSelected(prevSelected => !prevSelected);
        updateFilters(!selected, itemData.id)
    };
    return (
        <div className="tech-stack-item" onClick={toggleSelected}>
            <img className="tech-stack-grid-item" title={itemData.alt} src={itemData.link} />
            {selected && <img className="selected-icon" src="./images/selected.png" alt="Selected" />}
        </div>
    );

}

function ProjectTechStackItem({ itemData })
{
    return (
        <img className="tech-stack-grid-item" title={itemData.alt} src={itemData.link} />
    )
}

function SlidingMediaDisplay({ mediaLinks })
{
    if (mediaLinks == null)
    {
        return <div></div>;
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollLeft = () =>
    {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? mediaLinks.length - 1 : prevIndex - 1));
    };

    const scrollRight = () =>
    {
        setCurrentIndex(prevIndex => (prevIndex === mediaLinks.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="sliding-media">
            <div className="scroll" onClick={scrollLeft}>
                <img className="scroll-img" src="./images/scrollLeft.png"></img>
            </div>
            <div className="image-container">
                <img className="current-image" src={mediaLinks[currentIndex]}></img>
            </div>
            <div className="scroll" onClick={scrollRight}>
                <img className="scroll-img" src="./images/scrollRight.png"></img>
            </div>
        </div>
    );
}

function TableItem({ project })
{

    function scrollToProject()
    {
        let index = currentProjects.indexOf(project);
        let projectToScroll = document.getElementById('project-' + index)
        let el = document.querySelector(".holder");
        let yOffset = el.offsetTop;
        let y = projectToScroll.getBoundingClientRect().top + window.pageYOffset - yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
    }
    return (
        <div onClick={scrollToProject} className='contents-item'>{project.title}</div>
    )
}

function Table({ })
{

    function loadContents()
    {
        let contents = []
        for (let project of currentProjects)
        {
            contents.push(<TableItem project={project}></TableItem>)
        }
        return contents
    }

    return (
        <div className='table-of-contents'>
            <div className='table-body'>
                <div className='table-header'>Projects</div>
                <div className='contents-container'>
                    <div className='contents'>
                        {loadContents()}
                    </div>
                </div>
                <div className='table-footer'></div>
            </div>
        </div>
    )
}

function Project({ project })
{
    let index = projects.indexOf(project);
    if (index == -1)
    {
        projects.push(project)
    }
    currentProjects.push(project)
    index = currentProjects.indexOf(project);

    let [displayState, setDisplayState] = useState("none");
    let toggleStack = () =>
    {
        setDisplayState(prevState => (prevState == "none" ? "grid" : "none"));
    };

    function visitURL(url)
    {
        window.open(url, '_blank');
    }

    return (
        <div id={'project-' + index} className="project-entry-container">
            <div className="project-container">
                <a title="View project on Github" target="_blank" className="title" href={project.projectLink}>{project.title}</a>
                <div className="project-body">
                    <SlidingMediaDisplay mediaLinks={project.mediaLinks} />
                    <div className="scrollbar scrollbar-primary project-scroll">
                        <div className="summary" dangerouslySetInnerHTML={{ __html: project.summary }}></div>
                    </div>
                </div>
                <div style={{ display: (project.githubLink != "" && project.projectLink != "") ? "flex" : "none" }} className="button-container">
                    <button onClick={() => { visitURL(project.githubLink) }} style={{ display: (project.githubLink != "" ? "flex" : "none") }} type="button" className="about-me-button btn btn-primary project-button">
                        <div className="about-me-button-text">Github</div>
                    </button>
                    <button onClick={() => { visitURL(project.projectLink) }} style={{ display: (project.projectLink != "" ? "flex" : "none") }} type="button" className="about-me-button btn btn-primary project-button">
                        <div className="about-me-button-text">Visit</div>
                    </button>
                </div>
                <div className="tech-stack-container">
                    <div onClick={toggleStack} className="toggle-stack">Show Project Stack</div>
                    <div className="tech-stack-grid" style={{ gridTemplateColumns: 'repeat(6, 1fr)', display: displayState }}>
                        {createStackItems(project, false)}
                    </div>
                </div>
            </div>
        </div>
    );
}

//make tech stack more obvious and fix tech stack filtering

export { Project, TechStack, Table, PageHeader, DialogBox };
