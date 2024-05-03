const User =require("../models/User")

const userCreate = async () =>{
    const user = {
        firstName:'Yoneison',
        lastName:'Bayona',
        email:'yoneison1234@gmail.com',
        password:'yoneison1234',
        phone:'123456'
    }
    await User.create(user)
}
module.exports = userCreate