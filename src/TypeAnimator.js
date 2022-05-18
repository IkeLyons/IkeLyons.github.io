import { useState, useEffect, useRef } from "react";
import "./TypeAnimator.css";

function TypeAnimator({ text = "", timeout = 1000 }) {
  const [content, setContent] = useState("");
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = useRef();

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  });

  useEffect(() => {
    if (isVisible) {
      if (index < text.length) {
        setTimeout(() => {
          setContent((content) => content + text[index]);
        }, timeout);
        setIndex((index) => index + 1);
      }
    }
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
      //   console.log("Element is in view or above the viewport");
      setIsVisible(true);
    } else {
      //   console.log("Element is outside view");
      setIsVisible(false);
    }
  };

  return (
    <p ref={currentElement} className="typeAnimator">
      {content}
    </p>
  );
}

export default TypeAnimator;
