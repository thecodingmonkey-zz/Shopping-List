function ShoppingList(list_num) {
  this.items = [];
  this.num = (list_num ? list_num : 0);
}

ShoppingList.prototype.addItem = function (item) {
  if ((item instanceof ShoppingListItem) === false) {
    console.log('error');
    return false;
  }

  this.items.push(item);
};

ShoppingList.prototype.removeItem = function (item) {
  if (item instanceof ShoppingListItem) {
    var idx = this.items.indexOf(item);

    if (idx !== -1) {  // item is in list
      this.items.splice(idx, 1);
      return true;
    }

    console.log('not found');
    return false;
  }

  if (item === undefined) {
    // handles last item for no parameters
    this.items.pop();
    return true;
  }

  console.log('invalid object');
  return false;

};

ShoppingList.prototype.render = function() {
  var num = this.num;  // closure alert.

  return "<ul>" + this.items.reduce( function(prev, curr, idx) {
    return prev + curr.render(num.toString() + ", " + idx.toString() );
  }, "" ) + "<ul>";

};
