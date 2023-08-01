import { useRef, useEffect, useState } from 'react'
import "./CrypticLink.css"

const crytpicChars = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '[', ']', '{', '}', '<', '>', '?', '/', ';', ':']

function CrypticLink({link, text, timeout}){
    const [isVisible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const [content, setContent] = useState("")
    const currentElement = useRef();

    useEffect(() => {
        if (isVisible) {
          if (index < text.length) {
            //the timeout starts a loop because this effect has content as a dependency and the timout updates content
            setTimeout(() => {
                //Do the thing!!!!
                //Call setContent!!!!!
            }, timeout + (Math.floor(Math.random() * 200) - 99));
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
            <a href={link}>{content}</a>
        </div>
    )
}

export default CrypticLink;