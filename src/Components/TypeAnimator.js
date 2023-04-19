import { useState, useEffect, useRef } from "react";
import "./TypeAnimator.css";

function TypeAnimator({ text = "", timeout = 1000 }) {
  const [content, setContent] = useState("");
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);
  const currentElement = useRef();

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  });

  useEffect(() => {
    if (isVisible) {
      if (index < text.length) {
        //the timeout starts a loop because this effect has content as a dependency and the timout updates content
        setTimeout(() => {
          setContent((content) => content + text[index]);
        }, timeout + (Math.floor(Math.random() * 200) - 99));
        setIndex((index) => index + 1);
      } else {
        setIsBlinking(false);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content, isVisible]);

  const addEventListeners = () => {
    document.addEventListener("scroll", isInViewport);
  };

  const removeEventListeners = () => {
    document.removeEventListener("scroll", isInViewport);
  };

  const isInViewport = () => {
    const top = currentElement.current.getBoundingClientRect().top;
    if (top - window.innerHeight <= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div ref={currentElement} className="typeAnimator">
      {content}
      {isBlinking ? <div className="ghostCursor"></div> : null}
    </div>
  );
}

export default TypeAnimator;
