import { useState, useEffect } from "react";
import "./TypeAnimator.css";

function TypeAnimator({ text = "", timeout = 1000 }) {
  const [content, setContent] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      setTimeout(() => {
        setContent((content) => content + text[index]);
      }, timeout);
      setIndex((index) => index + 1);
    }
  }, [content]);

  return <pre className="typeAnimator">{content}</pre>;
}

export default TypeAnimator;
