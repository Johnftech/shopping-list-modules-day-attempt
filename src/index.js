import item from './item';
import store from './store';
import shoppingList from './shopping-list';
import $ from "jquery";
import './index.css';
import cuid from "cuid";

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();

};

$(main);