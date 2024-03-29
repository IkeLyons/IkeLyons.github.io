import { useRef, useEffect, useState } from 'react'
import "./CrypticChar.js"
import "./CrypticLink.css"
import CrypticChar from './CrypticChar.js';

// TODO: display all cryptic chars on hover?
function CrypticLink({link, text, timeout}){
    const [isVisible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const [numChars, setNumChars] = useState(text.length);
    const [content, setContent] = useState("");
    const currentElement = useRef();

    useEffect(() => {
      var timer;
        if (isVisible) {
          if (index < text.length) {
            timer = setInterval(() => {
              setContent(content + text[index]);
              setIndex(index + 1);
              setNumChars(numChars - 1);
            }, timeout)
          }
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      return () => clearInterval(timer);
    }, [content, isVisible, index]);

    useEffect(() => {
        addEventListeners();
        return () => removeEventListeners();
    });

    const crypticChars = Array.from({length: numChars}, (_, index) => {
      return <CrypticChar key={index}></CrypticChar>;
    });

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

    return(
        <div ref={currentElement} className="crypticLink">
            <a href={link}>{content}{crypticChars}</a>
        </div>
    )
}

export default CrypticLink;