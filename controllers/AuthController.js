const User = require('../model/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs/dist/bcrypt');

const TOKEN_KEY = "qwertyuipo"
// Register
const register = async (req, res) => {
    
    try{
        // Get value
        const {first_name, last_name, email, password} = req.body
        console.log(first_name, last_name, email, password)

        // Validate input
        if (!(email && password && first_name && last_name)) {
            res.status(400).send('Pls send all input')
        }

        // Check email already exist ?
        const oldUser = await User.findOne({ email });

        if( oldUser ){
            return res.status(409).send("USer already exist")
        }

        // bcrypt
        encryptedPassword = await bcrypt.hash(password, 10)

        // create user in db
        const user = await User.create({
            first_name,
            last_name,
            email : email.toLowerCase(),
            password : encryptedPassword
        })


        //Token Create
        const token = jwt.sign(
            {user_id: user._id, email},
            TOKEN_KEY,
            {
                expiresIn : '2h'
            }
        )
         
        user.token = token;

        return res.status(201).json(user)

    } 
    catch {
        console.log("Error")
    }
}

// Login 
const login = async (req, res) => {

    try{
        const {email, password} = req.body
        if(!(email && password)){
            res.status(400).send("ALl Input is required")
        }
        const user = await User.findOne({email});

        if (user && ( bcrypt.compare(password, user.password))){

            const token = jwt.sign(
                {user_id: user._id, email},
                TOKEN_KEY,
                {
                    expiresIn: '2h',
                }
                )
             //save token
             user.token = token;

            return res.status(200).json(user)
        }

        return res.status(400).send("Invalid auth login")

    }
    catch(err){

    }

}

const getUser = async (req, res) => {
    const user = await User.findById({_id: req.params.id})
    res.send(user)
}
 
module.exports = {login, register, getUser};