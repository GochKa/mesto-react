export default function Card(props){
  function handleClick() {
    props.onCardClick(props.card);
  } 

  return(

        <div className="post-list__item">
            <img className="post-list__photo" onClick={handleClick} src={`${props.card.link}`} alt={props.card.name}/>
            <button className="button-card-delete" type="button"></button>
            <div className="post-list__info">
              <h2 className="post-list__title">{props.card.name}</h2>
              <button className="post-list__like" type="button">
                <span className="like-counter"></span>
              </button>
            </div>
        </div>

  )
}