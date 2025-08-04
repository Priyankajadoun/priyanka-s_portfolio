import './App.css';
import Home2 from './Components/Home/Home2.js';
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js';
import Skills from"./Components/Skills/Skills.js";
import Education from './Components/Education/Education.js';
import Experience from "./Components/Experience/Experience.js";
import Portfolio from "./Components/Portfolio/Portfolio.js";
import Nav from './Components/Nav/Nav.js';
import "animate.css";


function App() {
  return (
    <div className="App">
     <Nav/>
     <div className="content-wrapper">
      <Home2/>
     <About/>
     <Skills/>
     <Experience/>
     <Education/>
     <Portfolio/>
     <Contact/>
     </div>
    </div>
  );
}

export default App;
