import StatisticsComponent from './src/view/statistics.js';
import RegistComponent from './src/view/registration-form.js';
import FiltersComponent from './src/view/filters.js';
import ApplicantsComponent from './src/view/applicants-list.js';
import {render} from './src/framework/render.js';


const statisticsContainer = document.querySelector('#statistics-component');
const registContainer = document.querySelector('#registration-form-component');
const filterContainer = document.querySelector('#filters-component');
const applicantsContainer = document.querySelector('#applicants-list-component');


render(new StatisticsComponent(), statisticsContainer );
render(new RegistComponent(), registContainer );
render(new FiltersComponent(), filterContainer );
render(new ApplicantsComponent(), applicantsContainer );