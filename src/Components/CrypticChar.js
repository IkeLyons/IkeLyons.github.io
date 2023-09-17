import { useEffect, useState } from "react";
import "./CrypticChar.css"

const timeout = 100;
const crytpicChars = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '-', '[', ']', '{', '}', '<', '>', '?', '/', ';', ':']

function CrypticChar(){
    const [content, setContent] = useState("");

    useEffect(() => {
        const interval = setInterval(() => setContent(getRandomChar), timeout);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const getRandomChar = () => {
        return crytpicChars[Math.floor(Math.random()*crytpicChars.length)]
    }

    return (<p>{content}</p>)
}


export default CrypticChar