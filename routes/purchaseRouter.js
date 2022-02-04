const { route } = require('express/lib/application')
const purchaseController = require('../controllers/purchaseController.js')

// create a Router object from express
const router = require('express').Router()

// add a new user to the table
router.post('/', purchaseController.addPurchase)

// access all the users in the table
router.get('/', purchaseController.getAllPurchases)

// access one user by id
router.get('/:id', purchaseController.getOnePurchase)

// modify one user by id
router.patch('/:id', purchaseController.updatePurchase)

// delete one user by id
router.delete('/:id', purchaseController.deletePurchase)

//by userId
route.get('/byuser/:userId', purchaseController.getPurchasesByUserId);

module.exports = router