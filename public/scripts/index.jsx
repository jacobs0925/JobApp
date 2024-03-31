import { getNode, pushNode, setNode } from './DBManager.js';
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

        aboutMeButton.addEventListener("click", function ()
        {
            let aboutMeDiv = document.getElementById('about-me')
            aboutMeDiv.scrollIntoView({ behavior: 'smooth' });

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