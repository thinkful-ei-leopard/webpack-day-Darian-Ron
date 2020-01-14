import $ from 'jquery';
import cuid from 'cuid';
import shoppingList from './shopping-list';
import store from './store';
import item from './item';

import './index.css';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
