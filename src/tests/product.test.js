
require('../models')

const Category = require("../models/Category")
const request = require("supertest")
const app  = require('../app')
const { login } = require("../controllers/user.controllers")
const BASE_URL = '/api/v1/products'
let category
let TOKEN

beforeAll(async()=>{
 
 const user = {
    email:'yoneison1234@gmail.com',
    password:'yoneison1234',}

    const res= await request(app)
    .post('api/v1/users/login')
    .send(user)

 category = await Category.create({name: 'tecno'})
})
test("POST -> BASE_URL, should return status code 201, and res.body.title ===  product.title", async ()=>{
    const product ={
        title: "Celular",
        description: "iphone 15 256gb",
        price:  890,
        categoryId: category.id
    }
    const res = await request(app)
    .post({BASE_URL})
    .send(product)
    .set('authorization',` bearer {TOKEN}`)

    expect(res.status).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.title).toBe(product.title)

    
})
test("GET -> BASE_URL, should return statusCode 200, and res.body===1", async()=>  {
    const res =  await request(app)
    .get(BASE_URL)

    expect(res.status).toBe(200)
    expect(res.body).toBedefined()
    expect(res.body).toHaveLength(1)
   
    await category.destroy()
})
