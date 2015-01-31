var myList = new ShoppingList();

window.onload = function() {

  document.getElementById('content').innerHTML = myList.render();
};


function add_to_shopping_list() {
  var newItem = new ShoppingListItem(
    document.forms[0].title.value,
    document.forms[0].description.value
    );

  myList.addItem(newItem);
  document.getElementById('content').innerHTML = myList.render();
}