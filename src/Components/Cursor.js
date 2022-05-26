import { useState, useEffect } from "react";
import "./Cursor.css";

function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.documentElement.addEventListener("mouseleave", onMouseOut);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.documentElement.removeEventListener("mouseleave", onMouseOut);
    document.documentElement.removeEventListener("mouseenter", onMouseEnter);
  };

  const onMouseOut = () => {
    setVisible(false);
  };

  const onMouseEnter = () => {
    setVisible(true);
  };

  const onMouseMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div>
      {visible ? (
        <div
          //   className={"cursor" + linkHovered ? " cursorHovered" : ""}
          className={`cursor ${linkHovered ? "cursorHovered" : ""}`}
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
          }}
        />
      ) : null}
    </div>
  );
}

export default Cursor;
