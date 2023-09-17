import { useRef, useEffect, useState } from 'react'
import "./CrypticChar.js"
import "./CrypticLink.css"
import CrypticChar from './CrypticChar.js';

const timeout = 1000;
const divideFactor = 10;

function CrypticLink({link, text}){
    const [isVisible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const [content, setContent] = useState("");
    const currentElement = useRef();

    useEffect(() => {
        if (isVisible) {
          if (index < text.length) {
            // TODO:
            // make this compnonent dynamically create and delete the crytpic char componenets
            // the timeout starts a loop because this effect has content as a dependency and the timout updates content
            setTimeout(() => {

            }, timeout/divideFactor);
            setIndex((index) => index + 1);
          }
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [content, isVisible]);

    useEffect(() => {
        addEventListeners();
        return () => removeEventListeners();
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
            <a href={link}><CrypticChar></CrypticChar></a>
        </div>
    )
}

export default CrypticLink;