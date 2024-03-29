import "./Bio.css";
import "../Components/TypeAnimator.js";
import "../Components/CrypticLink.js";
import TypeAnimator from "../Components/TypeAnimator.js";
import CrypticLink from "../Components/CrypticLink.js";

function Bio() {
  return (
    <div className="bioRoot" id="bio">
      <div className="bioText">
        <TypeAnimator text="nice to meet you, i'm ike lyons!" timeout={100}></TypeAnimator> i'm currently living in New York City where i'm either watching the bears or working for Audible (hopefully not both).{" "}
      </div>
      <div className="linkText">
        check out my{" "}
        <CrypticLink link="https://github.com/IkeLyons" text="GitHub" timeout="500" />{" "}
        if you're into that open-source stuff. if you want a more in depth look at my experiences check out my{" "}
        <CrypticLink link="https://www.linkedin.com/in/ikelyons/" text="linkedin" timeout="300"/>
        . 
      </div>
    </div>
  );
}

export default Bio;
