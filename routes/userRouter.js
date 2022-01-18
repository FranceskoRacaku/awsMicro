const userController = require('../controllers/userController.js')

// create a Router object from express
const router = require('express').Router()

// add a new user to the table
router.post('/', userController.addUser)

// access all the users in the table
router.get('/', userController.getAllUsers)

// access one user by id
router.get('/:id', userController.getOneUser)

// modify one user by id
router.put('/:id', userController.updateUser)

// delete one user by id
router.delete('/:id', userController.deleteUser)

module.exports = router