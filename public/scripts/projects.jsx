import { getNode } from './DBManager.js';
var ReactDOM = require('react-dom');
import { Project, TechStack, Table, PageHeader } from './components.js'

if (document.title == "Projects")
{
    let mobile = false;

    init()
    async function init()
    {
        if (window.innerWidth < 480)
        {
            mobile = true;
        }
        let projectsContainer = document.getElementById('project-page')
        let projectArray = await getNode("projects");
        let techStack = document.getElementById('tech-stack')
        let contents = document.getElementById('table-contents')
        let pageHeader = document.getElementById('page-header')
        ReactDOM.render(<PageHeader />, pageHeader);

        let fakeProject = {
            stackLinks: ["lambda", "firebase", "dynamo", "html", "python", "css", "rest", "github", "salesforce", "js", "java", "graphql", "s3"]
        }
        ReactDOM.render(<TechStack project={fakeProject} />, techStack);

        for (let index in projectArray)
        {

            let project = projectArray[index]
            let projectContainer = document.createElement('div');
            ReactDOM.render(<Project project={project} />, projectContainer);
            projectsContainer.appendChild(projectContainer)
        }

        var stackWidth = (window.innerWidth - document.querySelector('.project-container').offsetWidth) / 2;
        techStack.style.width = stackWidth + "px"
        contents.style.width = stackWidth + "px"

        ReactDOM.render(<Table />, contents);
    }
}

export { };