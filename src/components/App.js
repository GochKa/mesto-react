import React from 'react';
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopopWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

//Переменные состояния видимости popup'ов
const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
const [selectedCard, setSelectCard] = React.useState({link:"", name:""})


//Обработчики событий на открытие и закрытие popup'ов
    const profileEditClick = () =>{
      setEditProfilePopupOpen(true);
    }    

    const addNewPlaceClick = () =>{
        setAddPlacePopupOpen(true)
    }
    
    const changeAvatarClick = () =>{
        setEditAvatarPopupOpen(true);
    }

    const closeAllPopups = () =>{
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setEditAvatarPopupOpen(false)
        setSelectCard({link:"", name:""})
    }

    const handleCardClick = (card) =>{
      setSelectCard(card)
      
    }

//JSX код страницы и popup'ов в виде функциональных компонентов
  return (
    <div className="page-site">
      <Header />
      <Main 
        onCardClick={handleCardClick}
        onEditProfile={profileEditClick}
        onEditAvatar={changeAvatarClick}
        onAddPlace={addNewPlaceClick}
      />
      <Footer />

      <PopopWithForm id="1" name="profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <input id="first" className="popup__text" minLength="2" maxLength="40" required autoComplete="off"
                    name="First_name" />
                <span id="error-first" className="error-message"></span>
                <input id="profession" className="popup__text profession" minLength="2" maxLength="200" required
                    autoComplete="off" name="Profession" />
                <span id="error-profession" className="error-message"></span>

      </PopopWithForm>  

      <PopopWithForm id="2" name="add" title="Новое место"  buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                 <input id="place" className="popup__text name-place" name="Place" minLength="2" maxLength="30" required
                    autoComplete="off" placeholder="Название" />
                <span id="error-place" className="error-message"></span>
                <input id="link" type="url" className="popup__text link" name="Link" required autoComplete="off"
                    placeholder="Ссылка на изображение" />
                <span id="error-link" className="error-message"></span>

      </PopopWithForm>  

      <PopopWithForm id="3" name="change-avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <input id="image-link" type="url" className="popup__text profile-photo" name="avatar" required
                    autoComplete="off" placeholder="Ссылка на изображение" />
                <span id="error-image-link" className="error-message"></span>
      </PopopWithForm>  

      <PopopWithForm id="4" name="deleat-submit" title="Вы уверены?" buttonText="Да" />

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>  
    </div>
    
  );
}

export default App;
