import "./App.css";
import Landing from "./Landing.js";
import Bio from "./Bio.js";
import { ParallaxProvider } from "react-scroll-parallax";
import Cursor from "./Cursor.js";

function App() {
  return (
    <div className="App">
      <Cursor></Cursor>
      <ParallaxProvider>
        <Landing></Landing>
        <Bio></Bio>
        <div className="blankSpace"></div>
      </ParallaxProvider>
    </div>
  );
}

export default App;
