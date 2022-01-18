const express = require('express')
const app = express()
app.use(express.json())


const port = process.env.PORT || 3000
//routers
// const holdRouter = require('./routes/holdRouter.js');
// app.use('/holds', holdRouter);

const fundRouter = require('./routes/fundRouter.js')
app.use('/funds', fundRouter)

const userRouter = require('./routes/userRouter.js')
app.use('/users', userRouter)

const purchaseRouter = require('./routes/purchaseRouter.js')
app.use('/purchases', purchaseRouter)




app.get('/', (req, res) => {

res.send('Hello World!')
})
app.listen(port, () => {
console.log(`App listening at http://localhost:${port}`)
})