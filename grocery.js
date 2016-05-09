/*
 * What are the objects in this exercise?
 * What are their properties and methods?
 * How do your objects interact with their respective DOM elements?
 */

$(document).ready(function(){
  
  var list = new List();
  $('.item').click(function(event){
    var $target = $(event.target);
    var itemInfo = list.parse(this);
    var tr = list.injectRow(itemInfo);
    list.appendList(tr);
    list.updateTotalPrice(itemInfo.price);
  });
});



// Event listener for click
// Parse item info from <tr>
// inject item info into new <tr> to append to grocery list
// append to grocery list

//list should have a state, totalPrice
//list should have a method to update totalPrice with new item price
