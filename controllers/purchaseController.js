// require the db created in the index file
const db = require('../models/index')

// get the users model
const Purchase = db.Purchases

const addPurchase = async (req, res) => {
    let input_data = {
        amount: req.body.amount,
        fundId: req.body.fundId,
        userId: req.body.userId
        }

        // using the builtin 'create' function on User Model
        const purchase = await Purchase.create(input_data)
        // if(hold){
        
        // send a 200 response with the created entry
        res.status(200).send(purchase)

    // } else{
    //     res.status(500).send(err)
    // }
}       


const getAllPurchases = async (req, res) => {

    // using the builtin 'findOne' function on User Model
    let purchases = await Purchase.findAll({
        attributes:{exclude:['updatedAt','createdAt']},
    })
    res.status(200).send(purchases)
}            


const getAllPurchasesByUser = async (req, res) => {
    let userId = req.params.userId

    // using the builtin 'findOne' function on User Model
    let purchases = await Purchase.findAll({
        where: {userId: userId},
        attributes:{exclude:['updatedAt','createdAt']},
    })
    res.status(200).send(purchases)
}   

const getOnePurchase = async (req, res) => {

    // getting the id from the params in the req
    let id = req.params.id
    
    // using the builtin 'findOne' function on User Model
    let purchases = await Purchase.findOne({where: {id: id}, include: db.Funds})
    res.status(200).send(purchases)
}

const updatePurchase = async (req, res) => {
    let id = req.params.id

    // using the builtin 'update' function on Hold Model
    const purchase = await Purchase.update(req.body, { where: {id: id}, include: db.Funds})
    res.status(200).send(purchase)
}


const deletePurchase = async (req, res) => {
    let id = req.params.id

    // using the builtin 'destroy' function on Hold Model
    await Purchase.destroy({where :{id: id}})
    res.status(200).send(`purchase with id: ${id} is deleted`)
}      

// export all the controller functions
module.exports = {
    addPurchase,
    getAllPurchases,
    getOnePurchase,
    updatePurchase,
    getAllPurchasesByUser,
    deletePurchase
}