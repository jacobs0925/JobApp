import { doc } from 'firebase/firestore';
import { getNode, setNode } from './DBManager.js';
var ReactDOM = require('react-dom');
import { Project, TechStack, Table, PageHeader, DialogBox } from './components.js'

// import projectArray from './projects.json' assert { type: 'json' };
// setNode("projects", projectArray)

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
            stackLinks: ["lambda", "firebase", "dynamo", "react", "html", "python", "css", "rest", "github", "salesforce", "js", "java", "graphql", "s3"]
        }
        ReactDOM.render(<TechStack project={fakeProject} />, techStack);
        let newDoc = document.createElement('div')
        techStack.appendChild(newDoc)
        ReactDOM.render(<DialogBox element={techStack} text={"Click an icon here to filter by projects that use that technology."} />, newDoc)
        techStack.children[0]

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
        let hash = window.location.hash
        if (hash != null)
        {
            try
            {
                hash = hash.substr(1);
                let projectToScroll = document.getElementById('project-' + hash)
                console.log(projectArray[hash]['title'].replace(/\s/g, ""))
                let count = await getNode(projectArray[hash]['title'].replace(/\s/g, ""))
                setNode(projectArray[hash]['title'].replace(/\s/g, ""), count + 1)
                let el = document.querySelector(".holder");
                let yOffset = el.offsetTop;
                let y = projectToScroll.getBoundingClientRect().top + window.pageYOffset - yOffset;

                window.scrollTo({ top: y, behavior: 'smooth' });
            } catch (error)
            {
            }
        }

    }
}

export { };