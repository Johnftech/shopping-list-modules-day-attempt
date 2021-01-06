## Shopping List Starter

#### Created for the Thinkful EI Program.

Please reference the startup instructions within your curriculum.

Hint: Use methods exposed by the item module to complete the following:

In store.js, create a findById function that accepts an id as its argument:

Use the Array find() method to return the specific item from store.items.
Create an addItem function that accepts a name as its argument.

Use a try/catch block.
Validate the name and create the item.
Push the created item to this.items.
Create a findAndToggleChecked function that accepts an id as its argument.

Use this.findById() to fetch the item and toggle its checked attribute.
Create a findAndUpdateName function that accepts id and newName as its arguments.

Use a try/catch block.
Inside the try block, validate the name and then use findById() to fetch the item and update its name.
Inside the catch block, log the following message to the console: Cannot update name: ${error.message}.
Create a findAndDelete function that accepts an id as its argument.

Find the item by its id, and then remove it from this.items.
Hint: You can use Array method .filter() or a combination of .findIndex() and .splice().
Add all of these new functions to default export object.

Test your store methods:

Add the following lines to the end of your index.js module, and then view your application in a browser:

store.addItem('bananas');
store.addItem('apples');
store.addItem('rice');
// grab the id of the first store item (bananas)
let id = store.items[0].id;
// delete this item from the store
store.findAndDelete(id);
shoppingList.render();
Did "apples" and "rice" appear in the DOM? If so, your store.addItem method is working.
If you see "apples" and "rice" in the DOM, but do not see "bananas" in the DOM, your store.findAndDelete method is working.
Once you are finished with this test:

Delete the test code added to index.js