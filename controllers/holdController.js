// // require the db created in the index file
// const { sequelize } = require('../models/index')
// const db = require('../models/index')

// // get the holds model
// const Hold = db.Holds

// const addHold = async (req, res) => {
//     let input_data = {
//         purchases: req.body.purchases,
//         }

//         // using the builtin 'create' function on Hold Model
//         const hold = await Hold.create(input_data)
//         // if(hold){
        
//         // send a 200 response with the created entry
//         res.status(200).send(hold)

//     // } else{
//     //     res.status(500).send(err)
//     // }
// }       


// const getAllHolds = async (req, res) => {

//     // using the builtin 'findOne' function on Hold Model
//     let holds = await Hold.findAll({
//         attributes:{exclude:['updatedAt','createdAt']},
        
//         include: [
//             {model: db.Users, 
//             include: [db.Purchases, db.Users],
//             attributes:{exclude:['updatedAt','createdAt']}},
//         ]
//     })
        
//     res.status(200).send(holds)
// }                  

// const getOneHold = async (req, res) => {

//     // getting the id from the params in the req
//     let id = req.params.id
    
//     // using the builtin 'findOne' function on Hold Model
//     let holds = await Hold.findOne({where: {id: id}, include: db.Users})
//     res.status(200).send(holds)
// }

// const updateHold = async (req, res) => {
//     let id = req.params.id

//     // using the builtin 'update' function on Hold Model
//     const hold = await Hold.update(req.body, { where: {id: id}, include: db.Users})
//     res.status(200).send(hold)
// }


// const deleteHold = async (req, res) => {
//     let id = req.params.id

//     // using the builtin 'destroy' function on Hold Model
//     await Hold.destroy({where :{id: id}})
//     res.status(200).send(`hold with id: ${id} is deleted`)
// }      

// // export all the controller functions
// module.exports = {
//     addHold,
//     getAllHolds,
//     getOneHold,
//     updateHold,
//     deleteHold
// }