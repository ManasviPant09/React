function Card(props){
    return(
        <>
        <div className = "cards">
            <div className = "card">
                <img className = "cardimg" src={props.imgsrc} alt="cardimg" />
                <div className = "cardinfo">
                    <div className = "cardcategory">{props.cardcategory}</div>
                    <h3 className="cardtitle">{props.cardtitle}</h3>
                    <a href={props.link} target="_blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}
export default Card