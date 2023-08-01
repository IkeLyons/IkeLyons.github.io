import "./CrypticLink.css"

function CrypticLink({link, text}){
    return(
        <div className="crypticLink">
            <a href={link}>{text}</a>
        </div>
    )
}

export default CrypticLink;