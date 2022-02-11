// require the db created in the index file
const db = require('../models/index')

// get the users model
const Sell = db.Sells

const addSell = async (req, res) => {
    let input_data = {
        amount: req.body.amount,
        fundId: req.body.fundId,
        userId: req.body.userId
        }

        // using the builtin 'create' function on User Model
        const sell = await Sell.create(input_data)
        // if(hold){
        
        // send a 200 response with the created entry
        res.status(200).send(sell)

    // } else{
    //     res.status(500).send(err)
    // }
}       


const getAllSells = async (req, res) => {

    // using the builtin 'findOne' function on User Model
    let sells = await Sell.findAll({
        attributes:{exclude:['updatedAt','createdAt']},
    })
    res.status(200).send(sells)
}            


const getAllSellsByUser = async (req, res) => {
    let userId = req.params.userId

    // using the builtin 'findOne' function on User Model
    let sells = await Sell.findAll({
        where: {userId: userId},
        attributes:{exclude:['updatedAt','createdAt']},
    })
    res.status(200).send(sells)
}   

const getOneSell = async (req, res) => {

    // getting the id from the params in the req
    let id = req.params.id
    
    // using the builtin 'findOne' function on User Model
    let sells = await Sell.findOne({where: {id: id}, include: db.Purchases})
    res.status(200).send(sells)
}

const updateSell = async (req, res) => {
    let id = req.params.id

    // using the builtin 'update' function on Hold Model
    const sell = await Sell.update(req.body, { where: {id: id}, include: db.Purchases})
    res.status(200).send(sell)
}


const deleteSell = async (req, res) => {
    let id = req.params.id

    // using the builtin 'destroy' function on Hold Model
    await Sell.destroy({where :{id: id}})
    res.status(200).send(`sell with id: ${id} is deleted`)
}      

// export all the controller functions
module.exports = {
    addSell,
    getAllSells,
    getOneSell,
    updateSell,
    getAllSellsByUser,
    deleteSell
}