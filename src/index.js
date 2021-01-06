import item from '../item';
import store from '../scripts/store';
import shoppingList from '../scripts/shopping-list';
import $ from 'jquery';
import './index.css';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();

};

$(main);