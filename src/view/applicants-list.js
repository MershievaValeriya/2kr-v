import {createElement} from '../framework/render.js';


function createApplicantssComponentTemplate() {
    return (
        `<div class="applicants-list">
    <h2>Список абитуриентов</h2>
    <div id="applicants-container"></div>
</div>

`
      );
}


export default class ApplicantsComponent {
  getTemplate() {
    return createApplicantssComponentTemplate();
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
