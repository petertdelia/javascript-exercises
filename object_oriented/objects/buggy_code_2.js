let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    let price = this.price - discount;
    
    console.log(price);
  },
};

item.discount(20)   // should return 40
// = 40
item.discount(50)   // should return 25
// = 20
item.discount(25)   // should return 37.5
// = 15
