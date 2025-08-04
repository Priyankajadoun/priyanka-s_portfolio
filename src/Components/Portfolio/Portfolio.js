import React from 'react';
import "./Portfolio.css"
import ipod from "../../assets/img/ipod.png"
import stopwatch from "../../assets/img/stopwatch.png"
import busybuy from "../../assets/img/busybuy.png"
import tooltip from "../../assets/img/tooltip.png"
import devotion from "../../assets/img/devotion.png"
import digitalAlly from "../../assets/img/digitalAlly.png"
import PDCCI from "../../assets/img/PDCCI.png"
import Ecom from "../../assets/img/E-com.png"
import game from "../../assets/img/game.png"
import ExpenseTracker from "../../assets/img/Expense Tracker.png"
import doremon from "../../assets/img/doremon.png"
import ecommerce from "../../assets/img/ecommerce.png"
import GamingWebsite from "../../assets/img/gaming website.png"
import TheGameTub from "../../assets/img/TheGameTub.png"



// const info = [
//     {
//         id: 1, image: devotion, para: `A clean and informative website designed for Baal Vayas, focused on sharing cultural, educational, and spiritual content for young audiences. The site includes engaging visuals, clear navigation, and responsive design for all devices.

//             Skills Used:-

//             HTML5, CSS3 – for structured layout and styling

//             JavaScript – for interactive elements

//             Responsive Web Design – ensuring mobile-first compatibility

//             Netlify – for fast and reliable deployment`, href: "https://vocal-dasik-082aef.netlify.app/"
//     },
//     {
//         id: 2, image: stopwatch, para: `A sleek and responsive stopwatch application built using HTML, CSS, and JavaScript. This project demonstrates my ability to handle time-based logic, DOM manipulation, and responsive UI design. It features start, stop, reset, and lap functionalities, optimized for both desktop and mobile browsers.

// Skills Used: HTML, CSS, JavaScript, DOM Manipulation, Responsive Design, Web Deployment (Netlify)`, href: "https://dainty-valkyrie-48542b.netlify.app/"
//     },
//    {
//   id: 3,
//   image: ipod,
//   para: `iPod Web App\nA nostalgic iPod-inspired web application that replicates the classic iPod interface using modern web technologies. Users can scroll, play songs, navigate menus, and enjoy a smooth interactive experience just like the original device.\n\nTech Stack & Skills Used:\nHTML, CSS, JavaScript, React.js, State Management, UI/UX Design, Responsive Web Development, Component-Based Architecture.`,
//   href: "https://stately-kataifi-1264e4.netlify.app/"
// },

//     {
//   id: 4,
//   image: tooltip, // Replace with your tooltip project's image variable
//   para: `Tooltip Web App\nA lightweight and interactive tooltip project built using React.js to enhance user experience by displaying helpful information on hover or click. This mini project demonstrates clean UI design and dynamic rendering of tooltips using reusable components.\n\nTech Stack & Skills Used:\nHTML, CSS, JavaScript, React.js, State Management, Event Handling, Component-Based Architecture, UI/UX Design.`,
//   href: "https://mytooltipusingreact.netlify.app/"
// }
// ,
//     {
//         id: 5, image: PDCCI,
//         para: "This responsive and professional website was created for a doctor to showcase their clinic, services, and contact information.I built this project using HTML, CSS, JavaScript, and React.js, focusing on accessibility, responsiveness, and performance. This project reflects my skills in frontend development, component-based design, and building real-world client websites.",
//         href: "https://my-project-rawp.onrender.com/"
//     },
//     { id: 6, image: digitalAlly, para: "This is an marketing agency website using html,css and js.and using some library like bootstrap.", href: "https://silly-melomakarona-33f888.netlify.app/" },
//     {
//         id: 7, image: Ecom,
//         para: "I developed this fully responsive e-commerce website using React.js, showcasing my front-end skills in building user-friendly and visually appealing interfaces. The project includes key features such as product listings, category filtering, a dynamic cart, and smooth navigation—all designed with clean component architecture, React Hooks, and CSS styling. This project reflects my ability to build modern web applications with a focus on performance, usability, and scalability."
//         , href: "https://ecommerce-react-seven-azure.vercel.app/"
//     },
//     {
//         id: 8, image: game,
//         para: "Quiz Game in React is an interactive web application that challenges users with multiple-choice questions, offering real-time score tracking and dynamic feedback. I built this project using React.js, showcasing my skills in component-based architecture, state management with hooks, and responsive design with CSS. The app is deployed on Vercel, reflecting my experience with frontend deployment and creating engaging user interfaces through clean and functional UI development."
//         , href: "https://quiz-game-in-react.vercel.app/"
//     },
//     {
//         id: 9,
//         image: ExpenseTracker,
//         para: `Expense Tracker Web App
// This is a responsive and user-friendly expense tracker web application that helps users manage and visualize their daily spending. Built using React.js for the frontend and styled with CSS and Tailwind CSS, the app allows users to add, delete, and monitor their income and expenses in real time. I developed this project to demonstrate my skills in React.js, state management, component-based architecture, and modern UI/UX design principles. It is deployed on Vercel for fast and reliable hosting.`,
//         href: "https://expense-tracker-olive-iota.vercel.app/"
//     },
//     {
//         id: 10,
//         image: doremon,
//         para: `Doremon Fan Website – This is a fun and visually engaging web project built using React.js to showcase characters and moments from the popular anime Doremon. I created this site with a clean, responsive UI using CSS3 and React components, ensuring a smooth user experience across all devices. Through this project, I demonstrated my skills in frontend development, responsive design, and component-based architecture using modern JavaScript and React practices.`,
//         href: "https://doremon-frontend-react.vercel.app/"
//     },

//     {
//         id: 11, image: busybuy, para: "This is an e-commerce website which is developed by using react js a javascript library and firebase database. "
//         , href: "https://buy-busy-using-react.netlify.app/"
//     },
//     {
//         id: 12,
//         image: ecommerce,
//         para: `Ecommerce Website Project
// This is a fully responsive static ecommerce website built using HTML5, CSS3, and JavaScript. The site features a modern, clean layout with product listings, category sections, and a visually appealing homepage. I designed and developed this project to showcase my front-end development skills, including layout structuring, responsive design techniques, and UI/UX best practices. This project highlights my ability to create engaging and functional web interfaces using core web technologies.`,
//         href: "https://ecommerce-site-in-html.vercel.app/"
//     },
//     {
//         id: 13,
//         image: GamingWebsite,
//         para: `PopularGamesForYou.com offers a browser-based collection of casual HTML5 games, letting users jump into puzzles, racing, and arcade titles instantly—no downloads required.
// I developed a clean, mobile‑responsive layout with intuitive navigation, showcasing my expertise in HTML5, responsive CSS, and user‑friendly interface design.`,
//         href: "https://populargamesforyou.com/hot"
//     },
//     {
//         id: 14,
//         image: TheGameTub,
//         para: `TheGameTub – GameStab (testing.thegametub.com/gamestab)
// A browser‑based HTML5 game portal with a sleek, responsive layout that lets users enjoy uninterrupted gameplay across devices—no download required. I contributed by enhancing UI test coverage and improving cross‑device compatibility.`,
//         href: "https://testing.thegametub.com/gamestab"

//     },
// ]
const info = [
  {
    id: 1,
    image: devotion,
    para: `Baal Vayas Website\nA clean and informative website designed for Baal Vayas, focused on sharing cultural, educational, and spiritual content for young audiences. The site includes engaging visuals, clear navigation, and responsive design for all devices.\n\nTech Stack & Skills Used:\nHTML5, CSS3, JavaScript, Responsive Web Design, Netlify Deployment, UI/UX Design`,
    href: "https://vocal-dasik-082aef.netlify.app/"
  },
  {
    id: 2,
    image: stopwatch,
    para: `Stopwatch Web App\nA sleek and responsive stopwatch application demonstrating time-based logic, DOM manipulation, and responsive UI design. Features include start, stop, reset, and lap functionalities optimized for desktop and mobile browsers.\n\nTech Stack & Skills Used:\nHTML, CSS, JavaScript, DOM Manipulation, Responsive Design, Netlify Deployment`,
    href: "https://dainty-valkyrie-48542b.netlify.app/"
  },
  {
    id: 3,
    image: ipod,
    para: `iPod Web App\nA nostalgic iPod-inspired web application replicating the classic iPod interface with modern web technologies. Users can scroll, play songs, navigate menus, and enjoy a smooth interactive experience.\n\nTech Stack & Skills Used:\nHTML, CSS, JavaScript, React.js, State Management, UI/UX Design, Responsive Web Development, Component-Based Architecture`,
    href: "https://stately-kataifi-1264e4.netlify.app/"
  },
  {
    id: 4,
    image: tooltip,
    para: `Tooltip Web App\nA lightweight and interactive tooltip project built using React.js to enhance user experience by displaying helpful information on hover or click. Demonstrates clean UI design and dynamic rendering of reusable components.\n\nTech Stack & Skills Used:\nHTML, CSS, JavaScript, React.js, State Management, Event Handling, Component-Based Architecture, UI/UX Design`,
    href: "https://mytooltipusingreact.netlify.app/"
  },
  {
    id: 5,
    image: PDCCI,
    para: `Doctor Clinic Website\nA responsive and professional website showcasing a doctor's clinic, services, and contact information. Built focusing on accessibility, responsiveness, and performance.\n\nTech Stack & Skills Used:\nHTML, CSS, JavaScript, React.js, Accessibility, Responsive Design, Performance Optimization, Component-Based Design`,
    href: "https://my-project-rawp.onrender.com/"
  },
  {
    id: 6,
    image: digitalAlly,
    para: `Marketing Agency Website\nA marketing agency website built using HTML, CSS, JavaScript, and Bootstrap to create a modern, responsive layout and visually appealing design.\n\nTech Stack & Skills Used:\nHTML, CSS, JavaScript, Bootstrap, Responsive Web Design, UI/UX Design`,
    href: "https://silly-melomakarona-33f888.netlify.app/"
  },
  {
    id: 7,
    image: Ecom,
    para: `E-commerce Website\nA fully responsive e-commerce website built with React.js showcasing product listings, category filtering, dynamic cart, and smooth navigation. Designed with clean component architecture and React Hooks.\n\nTech Stack & Skills Used:\nReact.js, JavaScript, CSS, React Hooks, Component-Based Architecture, Responsive Design`,
    href: "https://ecommerce-react-seven-azure.vercel.app/"
  },
  {
    id: 8,
    image: game,
    para: `Quiz Game Web App\nAn interactive quiz game built using React.js with multiple-choice questions, real-time score tracking, and dynamic feedback. Highlights component-based architecture, state management, and responsive design.\n\nTech Stack & Skills Used:\nReact.js, JavaScript, CSS, State Management, Component Architecture, Responsive UI, Vercel Deployment`,
    href: "https://quiz-game-in-react.vercel.app/"
  },
  {
    id: 9,
    image: ExpenseTracker,
    para: `Expense Tracker Web App\nA responsive and user-friendly expense tracker built with React.js and styled using CSS and Tailwind CSS. Allows adding, deleting, and monitoring income and expenses in real time.\n\nTech Stack & Skills Used:\nReact.js, CSS, Tailwind CSS, State Management, Component-Based Architecture, UI/UX Design, Vercel Deployment`,
    href: "https://expense-tracker-olive-iota.vercel.app/"
  },
  {
    id: 10,
    image: doremon,
    para: `Doremon Fan Website\nA fun and visually engaging React.js website showcasing characters and moments from the popular anime Doremon. Features a clean, responsive UI and component-based architecture.\n\nTech Stack & Skills Used:\nReact.js, CSS3, Responsive Design, Component-Based Architecture, Frontend Development`,
    href: "https://doremon-frontend-react.vercel.app/"
  },
  {
    id: 11,
    image: busybuy,
    para: `BusyBuy E-commerce Website\nAn e-commerce website developed using React.js and Firebase database to manage product data and user authentication.\n\nTech Stack & Skills Used:\nReact.js, JavaScript, Firebase, Database Management, Responsive UI, Component Architecture`,
    href: "https://buy-busy-using-react.netlify.app/"
  },
  {
    id: 12,
    image: ecommerce,
    para: `Static Ecommerce Website\nA fully responsive static e-commerce website built with HTML5, CSS3, and JavaScript featuring product listings and category sections with a clean and modern design.\n\nTech Stack & Skills Used:\nHTML5, CSS3, JavaScript, Responsive Design, UI/UX Best Practices`,
    href: "https://ecommerce-site-in-html.vercel.app/"
  },
  {
    id: 13,
    image: GamingWebsite,
    para: `PopularGamesForYou.com\nA browser-based collection of casual HTML5 games including puzzles, racing, and arcade titles with a clean and mobile-responsive layout and intuitive navigation.\n\nTech Stack & Skills Used:\nHTML5, CSS, Responsive Web Design, UI/UX Design`,
    href: "https://populargamesforyou.com/hot"
  },
  {
    id: 14,
    image: TheGameTub,
    para: `TheGameTub – GameStab\nA browser-based HTML5 game portal with a sleek, responsive layout for uninterrupted gameplay across devices. Contributed to UI test coverage and cross-device compatibility improvements.\n\nTech Stack & Skills Used:\nHTML5, CSS3, Responsive Design, UI Testing, Cross-Browser Compatibility`,
    href: "https://testing.thegametub.com/gamestab"
  },
];


function Portfolio() {
    return (
        <div>
            <section id="portfolio">
                <h1 className="section-heading mb75px">
                    <span>
                        <i className="fas fa-th-list"></i>
                    </span>
                    <span> Portfolio </span>
                </h1>
                <div id="portfolio-container">
                    {/* {info.map((item, i) =>
                        <div className="portfolio-image-container" key={item.id}>
                            <a href={item.href}>
                                <img href={item.href} src={item.image} alt='porfolio' />
                                <div className="portfolio-details">
                                    <p>
                                        {item.para}
                                    </p>
                                </div>
                            </a>

                        </div>

                    )} */}
                    {info.map((item, i) =>
  <div className="portfolio-image-container" key={item.id}>
    <a href={item.href} target="_blank" rel="noopener noreferrer">
      <img src={item.image} alt="portfolio" />
      <div className="portfolio-details">
        {item.para.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </a>
  </div>
)}

                </div>
            </section>
        </div>
    )
}

export default Portfolio