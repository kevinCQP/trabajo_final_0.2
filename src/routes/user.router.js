const { getAll, create, remove, update, login } = require('../controllers/user.controllers');
const express = require('express');
const { verifyJwt } = require('../utils/verifyJWT');

const routerProducts = express.Router();

routerProducts.route('/')
    .get(verifyJwt,getAll)
    .post(create);
routerProducts.route('/login')
     .post(login)
routerProducts.route('/:id')
    
    .delete(verifyJwt,remove)
    .put(verifyJwt,update);

module.exports = routerProducts;