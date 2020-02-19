import item from './item.js';

const items = [];
const hideCheckedItems = false;

function findById(id) {
  return store.items.find(item => item.id === id);
}

function addItem(name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  }
  catch (error) {
    console.log('This is wrong!');
  }
}

function findAndToggleChecked(id) {
  const toggle = this.findById(id);
  toggle.checked = !toggle.checked;
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    this.findById(id).name = newName;
  }
  catch (error) {
    console.log(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id) {
  this.items = this.items.filter(item => item.id !== id);
}

export default {
  items, 
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};