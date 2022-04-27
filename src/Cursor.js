import { useState, useEffect } from "react";
import "./Cursor.css";

function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="cursor"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    />
    // <svg xmlns="<http://www.w3.org/2000/svg>">
    //     <path
    //       strokeWidth="2"
    //       stroke="white"
    //       d="M59.427,50.819 Q60,50 60.000,49.000L60.000,41.000 Q60,40 59.427,39.181L53.573,30.819 Q53,30 52.000,30.000L38.000,30.000 Q37,30 36.427,30.819L30.573,39.181 Q30,40 30.000,41.000L30.000,49.000 Q30,50 30.573,50.819L36.427,59.181 Q37,60 38.000,60.000L52.000,60.000 Q53,60 53.573,59.181Z"
    //     />
    //   </svg>
  );
}

export default Cursor;
