const { getAll, create, getOne, remove, update } = require('../controllers/product.controllers');
const express = require('express');
const { verifyJwt } = require('../utils/verifyJWT');

const routerProducts = express.Router();

routerProducts.route('/')
    .get(getAll)
    .post(verifyJwt,create);

routerProducts.route('/:id')
    .get(getOne)
    .delete(verifyJwt,remove)
    .put(verifyJwt,update);

module.exports = routerProducts;