import $ from 'jquery';
import cuid from 'cuid';
import shoppingList from './shopping-list';

import './index.css';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
