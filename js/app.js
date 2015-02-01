var myList = new ShoppingList();

window.onload = function() {

  document.getElementById('content').innerHTML = myList.render();
};


function add_to_shopping_list() {
  var newItem = new ShoppingListItem(
    document.forms[0].title.value,
    document.forms[0].description.value
    );

  document.forms[0].title.value = '';
  document.forms[0].description.value = '';
  document.forms[0].title.focus();

  myList.addItem(newItem);
  document.getElementById('content').innerHTML = myList.render();
}

function changeCheckedStatus(idx) {
  if (idx >= myList.items.length)
    return false;

  if (myList.items[idx].is_done) {
    myList.items[idx].uncheck();
  }
  else {
    myList.items[idx].check();
  }
}


function removeItemButtonClicked(idx) {
  if (idx >= myList.items.length)
    return false;

  myList.removeItem(myList.items[idx]);

  document.getElementById('content').innerHTML = myList.render();

}