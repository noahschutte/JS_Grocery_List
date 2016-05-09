var List = function(){
  this.totalPrice = 0;
};

List.prototype.parse = function(tr){
  var name = $(tr).find('.item_name').text();
  var price = $(tr).find('.item_price').text();
  var info = {name: name, price: price};
  return info;
};

List.prototype.injectRow = function(info){
  return '<tr class="item"><td class="item_name">' + info.name + '</td><td class="item_price">' + info.price + '</td></tr>';
};

List.prototype.appendList = function(tr){
  $('#grocery_list_body').append(tr);
};

List.prototype.updateTotalPrice = function(price){
  this.totalPrice = Math.floor((parseFloat(this.totalPrice) + parseFloat(price))*100)/100;
  $('#total_cost').html(this.totalPrice);
};
