import { useState, useEffect } from "react";

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

  return <pre>{content}</pre>;
}

export default TypeAnimator;
