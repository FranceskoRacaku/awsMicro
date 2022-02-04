// require the db created in the index file
const db = require('../models/index')

// get the users model
const User = db.Users

const addUser = async (req, res) => {
    let input_data = {
        id: req.body.id,
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userAge: req.body.userAge,
        // holdId: req.body.holdId
        }

        // using the builtin 'create' function on User Model
        const user = await User.create(input_data)
        // if(hold){
        
        // send a 200 response with the created entry
        res.status(200).send(user)

    // } else{
    //     res.status(500).send(err)
    // }
}       


const getAllUsers = async (req, res) => {

    // using the builtin 'findOne' function on User Model
    let users = await User.findAll({

        attributes:{exclude:['updatedAt','createdAt']},
        
    })
    res.status(200).send(users)
}                  

const getOneUser = async (req, res) => {

    // getting the id from the params in the req
    let id = req.params.id
    
    // using the builtin 'findOne' function on User Model
    let users = await User.findOne({where: {id: id}, include:  [
        {model: db.Purchases, 
        include: [db.Funds],
        attributes:{exclude:['updatedAt','createdAt']},}
    ]})
    res.status(200).send(users)
}

const updateUser = async (req, res) => {
    let id = req.params.id

    // using the builtin 'update' function on Hold Model
    const user = await User.update(req.body, { where: {id: id}, include: [
        {model: db.Purchases, 
        include: [db.Funds]}
    ]})
    res.status(200).send(user)
}


const deleteUser = async (req, res) => {
    let id = req.params.id

    // using the builtin 'destroy' function on Hold Model
    await User.destroy({where :{id: id}})
    res.status(200).send(`user with id: ${id} is deleted`)
}      

// export all the controller functions
module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
}