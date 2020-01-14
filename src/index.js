import $ from 'jquery';
import shoppingList from './shopping-list';

import './index.css';


const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);