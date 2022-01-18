const fundController = require('../controllers/fundController.js')

// create a Router object from express
const router = require('express').Router()

// add a new fund to the table
router.post('/', fundController.addFund)

// access all the funds in the table
router.get('/', fundController.getAllFunds)

// access one fund by id
router.get('/:id', fundController.getOneFund)

// modify one fund by id
router.put('/:id', fundController.updateFund)

// delete one fund by id
router.delete('/:id', fundController.deleteFund)

module.exports = router