import "./App.css";
import Landing from "./Landing.js";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Landing></Landing>
        <div className="blankSpace"></div>
      </ParallaxProvider>
    </div>
  );
}

export default App;
