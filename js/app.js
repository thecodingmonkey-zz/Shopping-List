var myList = [new ShoppingList(0), new ShoppingList(1), new ShoppingList(2) ];

window.onload = function() {
  refreshLists();
};

function refreshLists() {
  document.getElementById('content0').innerHTML = myList[0].render();  
  document.getElementById('content1').innerHTML = myList[1].render();  
  document.getElementById('content2').innerHTML = myList[2].render();  
}


function add_to_shopping_list(listNum) {
  var newItem = new ShoppingListItem(
    document.forms[listNum].title.value,
    document.forms[listNum].description.value
    );

  document.forms[listNum].title.value = '';
  document.forms[listNum].description.value = '';
  document.forms[listNum].title.focus();

  myList[listNum].addItem(newItem);
  refreshLists();
}

function changeCheckedStatus(listNum, idx) {
  if (idx >= myList[listNum].items.length)
    return false;

  if (myList[listNum].items[idx].is_done) {
    myList[listNum].items[idx].uncheck();
  }
  else {
    myList[listNum].items[idx].check();
  }
}


function removeItemButtonClicked(listNum, idx) {
  if (idx >= myList[listNum].items.length)
    return false;

  myList[listNum].removeItem(myList[listNum].items[idx]);

  refreshLists();
}