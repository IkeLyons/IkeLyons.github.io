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
        let to = timeout + (Math.floor(Math.random() * 200) - 99);
        console.log(index);
        setTimeout(() => {
          setContent((content) => content + text[index]);
        }, to);
        setIndex((index) => index + 1);
      } else {
        setIsBlinking(false);
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
    <div ref={currentElement} className="typeAnimator">
      {/* <div className="contentDiv">{content}</div> */}

      {content}
      {isBlinking ? <div className="test"></div> : null}
    </div>
  );
}

export default TypeAnimator;
