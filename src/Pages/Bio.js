import "./Bio.css";
import "../Components/TypeAnimator.js";
import TypeAnimator from "../Components/TypeAnimator.js";

function Bio() {
  return (
    <div className="bioRoot">
      <div className="bioText">
        <TypeAnimator text="nice to meet you, i'm ike lyons!" timeout={100}></TypeAnimator> i'm currently living in New York City where i'm either watching the bears or working for Audible (hopefully not both).{" "}
      </div>
      <div className="linkText">
        check out my{" "}
        <div className="linkContainer">
          <a href="https://github.com/IkeLyons">GitHub</a>{" "}
        </div>
        if you're into that open-source stuff. if you want a more in depth look at my experiences check out my{" "}
        <div className="linkContainer">
          <a href="https://www.linkedin.com/in/ikelyons/">linkedin</a>
        </div>
        . 
      </div>
    </div>
  );
}

export default Bio;
