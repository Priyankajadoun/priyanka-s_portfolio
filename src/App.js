import './App.css';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js';
import Skills from"./Components/Skills/Skills.js";
import Education from './Components/Education/Education.js';
import Experience from "./Components/Experience/Experience.js";
import Portfolio from "./Components/Portfolio/Portfolio.js";


function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <Skills/>
     <Experience/>
     <Education/>
     <Portfolio/>
     <Contact/>
    </div>
  );
}

export default App;
