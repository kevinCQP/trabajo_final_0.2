const User = require("./User")
const Category = require('./Category');
const Products = require('./Product');
const Cart = require("./Cart");
const Purchase = require("./Purchase");

Products.belongsTo(Category)
Category.hasMany(Products)

Cart.belongsTo(User)
User.hasMany(Cart)

Cart.belongsTo(Products)
Products.hasMany(Cart)
 
Purchase.belongsTo(User)
User.hasMany(Purchase)

Purchase.belongsTo(Products)
Products.hasMany(Purchase)
