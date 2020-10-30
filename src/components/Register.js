import React from "react";

import "../styles/register.css";

class Register extends React.Component {
  render() {
    return (
        <>
          <section className="register__frame">
          <div className="content__container is-align-center">
            <div className="register__frame-wrapper">
            <h1>Расскажите о себе</h1>

            <form>
             <div className="fieldContainer">
               <h2>Информация о вас</h2>
               <div className="formRow">
                 <div className="label">
                   <label for="name">ФИО</label>
                 </div>

                 <div className="field">
                   <input type="text" name="name" id="name"/>
                 </div>
               </div>
               <div className="formRow">
                 <div className="label">
                   <label htmlFor="date">Дата рождения</label>
                 </div>

                 <div className="field">
                   <input type="date" name="date" id="date"/>
                 </div>
               </div>
               <div className="formRow">
                 <div className="label">
                   <label htmlFor="email">Электронная почта</label>
                 </div>

                 <div className="field">
                   <input type="text" name="email" id="email"/>
                 </div>
               </div>
               <div className="formRow">
                 <div className="label">
                   <label htmlFor="tel">Телефон</label>
                 </div>

                 <div className="field">
                   <input type="tel" name="tel" id="tel"/>
                 </div>
               </div>
               <h2>Паспорт</h2>
               <div className="formRow">
                 <div className="label">
                   <label htmlFor="name">Серия и номер</label>
                 </div>

                 <div className="field">
                   <input type="number" name="name" id="name"/>
                 </div>
               </div>
               <div className="formRow">
                 <div className="label">
                   <label htmlFor="date">Дата выдачи</label>
                 </div>

                 <div className="field">
                   <input type="date" name="date" id="date"/>
                 </div>
               </div>
               <div className="formRow">
                 <div className="label">
                   <label htmlFor="date">Кем выдан</label>
                 </div>

                 <div className="field">
                   <input type="text" name="email" id="email"/>
                 </div>
               </div>
               <div className="formRow">
                 <div className="label">
                   <label htmlFor="tel">Код подразделения</label>
                 </div>

                 <div className="field">
                   <input type="tel" name="tel" id="tel"/>
                 </div>
               </div>

               <h2>Учетные данные</h2>

               <div className="formRow">
                 <div className="label">
                   <label htmlFor="name">Логин</label>
                 </div>
                 <div className="field">
                   <input type="name" name="name" id="name"/>
                 </div>
               </div>
               <div className="formRow">
                 <div className="label">
                   <label htmlFor="password">Пароль</label>
                 </div>
                 <div className="field">
                   <input type="password" name="password" id="name"/>
                 </div>
               </div>
               <div className="formRow">
                 <button type="submit" className="submitBtn">
                   Отправить форму
                 </button>
               </div>




             </div>


            </form>
          </div>
          </div>
          </section>
        </>
    )
  }
}

export default Register;