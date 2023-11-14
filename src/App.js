import NavBar from "./components/navbar/navbar.js";
import Intro from "./components/intro/intro.js";
import Skills from "./components/skills/skills.js";
import Works from "./components/works/works.js";
import Contact from "./components/contact/contact.js";
import Footer from "./components/footer/footer.js";
import { Link } from 'react-scroll';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


