//Prototype User
const User = function (name, email, password, pointsAccumulate) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.pointsAccumulate = pointsAccumulate;
}

//Method for accumulate points
User.prototype.accumulatePoints = function(){
    console.log('logic to accumulate points');
}

//Method to redeem points
User.prototype.redeemPoints = function(){
    console.log('logic to change points');
}

//Prototype Product
const Product = function(name, needPoints,availableQuantity, stock){
    this.name = name;
    this.needPoints = needPoints;
    this.availableQuantity = availableQuantity;
    this.stock = stock;
}

//Method for update stack
Product.prototype.updateStock = function() {
    // Logic for update the stock
    console.log(`The stock for product ${this.name} it has been update`);
};

//Method of obtaining information
Product.prototype.getInformation = function() {
    // Return information product
    return `Name: ${this.name}, Points needed: ${this.needPoints}, Quantity available: ${this.availableQuantity}`;
};

//Prototype Product in store
const ProductVisible = function(name, needPoints,availableQuantity, stock, price){
    Product.call(this, name, needPoints, availableQuantity, stock);
    this.price = price;
}
ProductVisible.prototype = Object.create(Product.prototype);
ProductVisible.prototype.constructor = ProductVisible;

//Method for send product
ProductVisible.prototype.sendProducto = function() {
    // Logic to send the physical product
    console.log(`The physical product ${this.name} it has been send`);
};

//Prototype Product Digital
const ProductDigital = function(name, needPoints,availableQuantity, stock, url){
    Product.call(this, name, needPoints, availableQuantity, stock);
    this.url = url;
}
ProductDigital.prototype = Object.create(Product.prototype);
ProductDigital.prototype.constructor = ProductDigital;

//
ProductDigital.prototype.download = function() {
    // Logic for download the digital product
    console.log(`The digital product ${this.name} it has been download`);
};
  
ProductDigital.prototype.getProductEmail = function() {
    // Logic for get the digital product for email
    console.log(`The digital product ${this.name} it has been send for email`);
};

//Prototype Activity
const Activity = function(type, pointsAwarded){
    this.type = type;
    this.pointsAwarded = pointsAwarded;
}

//Method for the complete activity
Activity.prototype.completeActivity = function(){
    //Logic for complete activity
    console.log(`The activity ${this.type} it has been completed`);
}

//Prototype Category of product
const CategoryProduct = function(description){
    this.description = description;
}

//Method list product
CategoryProduct.prototype.listProducts = function(){
    //Logic for list products
    console.log(`List of products of the category: ${this.description}`);
}

//Prototype Exchange Order
const OrderExchange = function(date){
    this.date = date;
}

//Method confirm order
OrderExchange.prototype.confirmOrder = function(){
    //Logic for confirm the order of exchange
    console.log(`The order of exchange it been confirm for the date: ${this.date}`);
}

//Method cancel order
OrderExchange.prototype.cancelOrder = function(){
    //Logic for cancel the order of exchange
    console.log(`The order of exchange it been cancel for the date: ${this.date}`);
}

//Protorype administrator
const Administrator = function(name, email, password){
    User.call(this, name, email, password);
}
Administrator.prototype = Object.create(User.prototype);
Administrator.prototype.constructor = Administrator;

Administrator.prototype.agregarProducto = function() {
    //Locin for add a product 
    console.log(`Product add by administrator`);
  };
  
  Administrator.prototype.modificarProducto = function() {
    // Locic for modifid a product 
    console.log(`Product modified by administrator.`);
  };
  
  Administrator.prototype.eliminarUsuario = function() {
    // Logic for deleted a user
    console.log(`User deleted by administrator`);
  };

