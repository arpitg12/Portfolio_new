import self from "../img/pixlr-image-generator-bd3a8cd3-1731-43ed-9ea7-9cbd5d67eca2.png"
import mock1 from "../img/Untitled design (3).png"
import mock2 from "../img/Untitled design (7).png"
import mock3 from "../img/Untitled design.png"
import mock4 from "../img/Untitled design (4).png"
import mock5 from "../img/Untitled design (6).png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Arpit",
    lastName: "Agrawal",
    initials: "Coder", // the example uses first and last, but feel free to use three or more if you like.
    position: "a React Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'Based in the India'
        },
        {
            emoji: "💼",
            text: "Final year student"
        },
        {
            emoji: "📧",
            text: "arpitagrawal1207@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/arpit.agrawal.585112?mibextid=ZbWKwL",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/its_arpit_girdhar?igsh=emRzYzh6eDV6ZWF1",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/arpitg12",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/agrawal-arpit1207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/ArpitAg77364332?t=TuAyvr5Aq01PJJwVSKPNiw&s=09",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    //I am Arpit Agrawal from Mathura, pursuing Btech from Computer science. 
    //I love to participate in hackathons. Recently I participated in MLSA MIET hackathon 
    //at Meerut and in this hacthkon my team came under top 10 teams.
    bio: "Hello! I'm Arpit. I'm a Final year student. I love to participate in hackathons, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['C++', 'Javascript', 'React', 'Html5', 'CSS3', 'Tailwind', 'Bootstrap', 'Git', 'Github'],
            exposedTo: ['NodeJs', 'Redux', 'Python', 'SQL','Php']
        }
    ,
    hobbies: [
        {
            label: 'Reading Books',
            emoji: '📖'
        },
        {
            label: 'Playing Chess',
            emoji: '♟️'
        },
        {
            label: 'Watching Movies',
            emoji: '🎥'
        },
        {
            label: 'Travelling',
            emoji: '🚜'
        }
    ],
    portfolio: [ 
        {
            title: "Pd@i.com",
            live: "https://phppdai.infinityfreeapp.com/?i=3", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/arpitg12/coaching", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Car_rental system",
            live: "https://phptask890.infinityfreeapp.com/index.php", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/arpitg12/car_rental", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock5
        },
        {
            title: "ToDo-List",
            live: "https://todolist-fb400a.netlify.app/",
            source: "https://github.com/arpitg12/todo_QuadB-Tech",
            image: mock2
        },
        {
            title: "TicTacToe",
            live: "https://tictactoe-arpit.netlify.app/",
            source: "https://tictactoe-arpit.netlify.app/",
            image: mock3
        },
        {
            title: "Githud Kudos",
            live: "https://github-react-apis.netlify.app/",
            source: "https://github.com/arpitg12/Detective-app",
            image: mock4
        },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}