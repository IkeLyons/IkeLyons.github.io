import "./App.css";
import Landing from "./Pages/Landing.js";
import Bio from "./Pages/Bio.js";
import Projects from "./Pages/Projects.js";
import { ParallaxProvider } from "react-scroll-parallax";
import Cursor from "./Components/Cursor.js";

function App() {
  return (
    <div className="App">
      <Cursor></Cursor>
      <ParallaxProvider>
        <Landing></Landing>
        <Bio></Bio>
        <Projects></Projects>
      </ParallaxProvider>
    </div>
  );
}

export default App;
