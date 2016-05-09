/*
 * What are the objects in this exercise?
 * What are their properties and methods?
 * How do your objects interact with their respective DOM elements?
 */

var Item = function(){
  this.name = name;
  this.price = price;
};

var List = function(){

}

List.prototype.parse = function(tr){
  var name = $(tr).find('.item_name').text()
  var price = $(tr).find('.item_price').text()
  var info = {name: name, price: price}
  return info
}

List.prototype.injectRow = function(info){
  return '<tr class="item"><td class="item_name">' + info.name + '</td><td class="item_price">' + info.price + '</td></tr>'
}

List.prototype.appendList = function(tr){
  $('#grocery_list_body').append(tr)
}


$(document).ready(function(){
  $('.item').click(function(event){
    var $target = $(event.target);
    var itemInfo = list.parse(this);
    var tr = list.injectRow(itemInfo);
    list.appendList(tr)
  });

//DRIVER CODE
list = new List();

})



// Event listener for click
// Parse item info from <tr>
// inject item info into new <tr> to append to grocery list
// append to grocery list
