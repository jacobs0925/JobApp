import { doc } from 'firebase/firestore';
import { getNode, pushNode, setNode } from './DBManager.js';
import { PageHeader, DialogBox } from './components.js';
var ReactDOM = require('react-dom');

// import projectArray from './projects.json' assert { type: 'json' };
// setNode("projects", projectArray)

if (document.title == "Jacob Schwarzenberger")
{
    let time = null
    let mobile = false;
    window.addEventListener('beforeunload', reportTime);
    init()
    async function init()
    {

        if (window.innerWidth < 480)
        {
            mobile = true;
        }
        const currentDate = new Date();
        const currentDayOfMonth = currentDate.getDate();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        time = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;

        let aboutMeButton = document.getElementById('about-me-button')
        let projectsButton = document.getElementById('projects-button')
        let pageHeader = document.getElementById('page-header')

        let buttonContainer = document.getElementById('button-container')
        let newDoc = document.createElement('div')
        // newDoc.className = "dialog-holder"
        buttonContainer.appendChild(newDoc)
        ReactDOM.render(<DialogBox element={projectsButton} position={'bottom-right'} text={"Click here to see some of my professional and personal work!"} />, newDoc)


        ReactDOM.render(<PageHeader />, pageHeader);
        aboutMeButton.addEventListener("click", function ()
        {
            let aboutMeDiv = document.getElementById('project-page')
            let el = document.querySelector(".header");
            let yOffset = el.offsetHeight;
            let y = aboutMeDiv.getBoundingClientRect().top + window.pageYOffset - yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });

            // aboutMeDiv.scrollIntoView({ behavior: 'smooth' });

        });

        projectsButton.addEventListener("click", function ()
        {
            location.href = "./projects.html";
        });

        let count = await getNode('viewed')
        setNode("viewed", count + 1)
    }

    function reportTime()
    {
        let timeSpent = performance.now()

        const hash = window.location.hash.substr(1);
        let udata
        if (hash)
        {
            udata = {
                "hash": hash,
                "time": time,
                "timeSpent": Math.round((timeSpent / 1000) * 100) / 100
            }
        }
        else
        {
            udata = {
                "time": time,
                "timeSpent": Math.round((timeSpent / 1000) * 100) / 100
            }
        }
        pushNode(hash ? "visitors" : "anonymousVisitors", udata)
    }
}
export { }