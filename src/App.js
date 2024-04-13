import "./App.css";
import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
