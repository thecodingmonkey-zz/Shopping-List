function ShoppingList() {
  this.items = null;


  items = [];
}

ShoppingList.prototype.addItem = function (item) {
  if ((item instanceof ShoppingListItem) === false) {
    console.log('error');
    return false;
  }

  items.push(item);
};

ShoppingList.prototype.removeItem = function (item) {
  if (item instanceof ShoppingListItem) {
    var idx = items.indexOf(item);

    if (idx !== -1) {  // item is in list
      items.splice(idx, 1);
      return true;
    }

    console.log('not found');
    return false;
  }

  if (item === undefined) {
    // handles last item for no parameters
    items.pop();
    return true;
  }

  console.log('invalid object');
  return false;

};

ShoppingList.prototype.render = function() {
  return "<ul>" + items.reduce( function(prev, curr) {
    return prev + curr.render();
  }, "" ) + "<ul>";

};