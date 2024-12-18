import {createElement} from '../framework/render.js';


function createRegistComponentTemplate() {
    return (
        `<div class="registration-form">
    <h2>Регистрация абитуриента</h2>
    <form id="applicant-form">
        <input type="text" id="fullname" placeholder="ФИО" required>
        <input type="email" id="email" placeholder="Email" required>
        <input type="tel" id="phone" placeholder="Телефон" required>
        
        <select id="faculty" required>
            <option value="">Выберите факультет</option>
            <option value="IT">Информационных технологий</option>
            <option value="ECONOMICS">Экономический</option>
            <option value="MEDICINE">Медицинский</option>
            <option value="HUMANITIES">Гуманитарный</option>
        </select>

        <button type="submit">Зарегистрировать</button>
    </form>
</div>
`
      );
}


export default class RegistComponent {
  getTemplate() {
    return createRegistComponentTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
