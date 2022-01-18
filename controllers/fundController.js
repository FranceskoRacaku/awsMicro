// require the db created in the index file
const db = require('../models/index')

// get the funds model
const Fund = db.Funds

const addFund = async (req, res) => {
    let input_data = {
        symbol: req.body.symbol,
        name: req.body.name,
        inceptionDate: req.body.inceptionDate,
        categoryOne: req.body.categoryOne,
        categoryTwo: req.body.categoryTwo,
        categoryThree: req.body.categoryThree,
        marketCap: req.body.marketCap,
        currentDividendYield: req.body.currentDividendYield,
        historicalAverageDividendYield: req.body.historicalAverageDividendYield,
        everageFactor: req.body.everageFactor,
        averageVolume: req.body.averageVolume,
        action: req.body.action,
        }
        // using the builtin 'create' function on Fund Model
        const fund = await Fund.create(input_data)
        
        // send a 200 response with the created entry
        res.status(200).send(fund)
}       

const getAllFunds = async (req, res) => {

    // using the builtin 'findOne' function on Fund Model
    let funds = await Fund.findAll({
        attributes:{exclude:['updatedAt','createdAt']}
    })
    res.status(200).send(funds)
}                  

const getOneFund = async (req, res) => {

    // getting the id from the params in the req
    let id = req.params.id
    
    // using the builtin 'findOne' function on Fund Model
    let funds = await Fund.findOne({where: {id: id}})
    res.status(200).send(funds)
}

const updateFund = async (req, res) => {
    let id = req.params.id

    // using the builtin 'update' function on Fund Model
    const fund = await Fund.update(req.body, { where: {id: id}})
    res.status(200).send(fund)
}


const deleteFund = async (req, res) => {
    let id = req.params.id

    // using the builtin 'destroy' function on Fund Model
    await Fund.destroy({where :{id: id}})
    res.status(200).send(`fund with id: ${id} is deleted`)
}      

// export all the controller functions
module.exports = {
    addFund,
    getAllFunds,
    getOneFund,
    updateFund,
    deleteFund
}