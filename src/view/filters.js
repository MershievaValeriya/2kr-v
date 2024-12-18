import {createElement} from '../framework/render.js';


function createFiltersComponentTemplate() {
    return (
        `<div class="filters">
    <h2>Фильтры</h2>
    <select id="faculty-filter">
        <option value="">Все факультеты</option>
        <option value="IT">Информационных технологий</option>
        <option value="ECONOMICS">Экономический</option>
        <option value="MEDICINE">Медицинский</option>
        <option value="HUMANITIES">Гуманитарный</option>
    </select>
    <input type="text" id="search-input" placeholder="Поиск по ФИО">
</div>
`
      );
}


export default class FiltersComponent {
  getTemplate() {
    return createFiltersComponentTemplate();
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
