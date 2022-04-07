import React from "react";
import '../index.css';
import api from "../utils/Api";
import Card from "./Card";
function Main(props){
  const [userInfo, setUserInfo] = React.useState({})
  const [cards, setCards] = React.useState([])
 
  React.useEffect(() =>{
    Promise.all ([api.getInitialCards() ,api.getProfile()])
    .then(([card,res]) =>{
      setUserInfo(res)
      setCards(card)
    })
  }, [])

  const onEditProfile = () =>{
    props.onEditProfile(props.onClick)
  }

  const onAddPlace = () =>{
    props.onAddPlace(props.onClick)
  }

  const onEditAvatar = () =>{
    props.onEditAvatar(props.onClick)
  }

  return(
    <main className="content">

    <section className="profile">
      <button type="button" className="change-avatar" onClick={onEditAvatar}>
        <img src={userInfo.avatar} alt="Профиль" className="profile__avatar"/>
       </button>
       <div className="profile__info">
          <h1 className="profile__info-title">{userInfo.name}</h1>
          <button className="edit-button" type="button" onClick={onEditProfile}>
           </button>
           <p className="profile__info-subtitle">{userInfo.about}</p>
       </div>
    <button className="add-bottun" type="button" onClick={onAddPlace}></button>
    </section>
    <section className="post-list">
      {cards.map((card) =>{
        return(
          <Card key={card._id} card={card}
          onCardClick={props.onCardClick}
          />
        )
      })}
    </section>

  </main>
  );
}

export default Main