import "./Bio.css";

function Bio() {
  return (
    <div className="bioRoot">
      <div className="bioText">
        nice to meet you! i'm ike lyons, a software engineer and web devloper based in New York City. i'm passionate about open source, football, and learning
        new technologies.{" "}
      </div>
      <div className="linkText">
        check out my{" "}
        <div className="linkContainer">
          <a href="https://github.com/IkeLyons">GitHub</a>{" "}
        </div>
        to view my work across the entire stack. if you'd like to see my professional history, check out my{" "}
        <div className="linkContainer">
          <a href="https://www.linkedin.com/in/william-lyons-6bb1161a9/">linkedin</a>{" "}
        </div>
      </div>
    </div>
  );
}

export default Bio;
