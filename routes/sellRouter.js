const sellController = require('../controllers/sellController.js')

// create a Router object from express
const router = require('express').Router()

// add a new user to the table
router.post('/', sellController.addSell)

// access all the users in the table
router.get('/', sellController.getAllSells)

// access all the users in the table
router.get('/user/:userId', sellController.getAllSellsByUser)


// access one user by id
router.get('/:id', sellController.getOneSell)

// modify one user by id
router.patch('/:id', sellController.updateSell)

// delete one user by id
router.delete('/:id', sellController.deleteSell)




module.exports = router