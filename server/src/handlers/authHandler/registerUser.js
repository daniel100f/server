const { User} = require('../../db');
const { encrypt } = require('../../helpers/handlerBcrype');

const registerUser = async(req,res) =>{
    try {
        const { email, password, name, lastName, role }= req.body;
        const passwordHash = await encrypt(password);
        const registerUser = await User.create({
            name,
            lastName,
            email,
            password:passwordHash,
            role: "administrator"
        })
        res.send({data: registerUser})
    } catch (error) {
        res.send({error:error.message})
    }
}

module.exports={
    registerUser,
}