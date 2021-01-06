import item from './item.js';

const items = [];
const hideCheckedItems = false;

// this refers to the current module

/**
 * Methods
 */
const findById = function(id) {
    return this.items.find(item => item.id === id);
};

const addItem = function (name) {
    try {
        item.validateName(name);
        this.items.push(item.create(name));
    } 
    catch (error) {
        console.log('Error message:', error.message);
    }
};

const findAndToggleChecked = function (id) {
    const foundItem = this.findById(id);
    foundItem.checked =!foundItem.checked;
};

const findAndUpdateName = function (id, newName) {
  try {
    item.validateName(newName);
    const nameUpdate = this.findById(id);
    nameUpdate.name = newName;
  }
  catch (error) {
    console.log(`Cannot update name: ${error.message}`);
  }
};

const findAndDelete = function (id) {
  console.log('this is this.items:', this.items);
  this.items = this.items.filter(foundItem => 
    foundItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};
// This object contains the only exposed methods from this module:
export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
};



