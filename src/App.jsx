import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contacts } from "./components/Contacts/Contacts";
import { Connect } from "./components/Mail/Connect";
function App() {
  return <div className={styles.App}> 
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <Connect/>
    <Contacts/>
    
  </div>

}

export default App
