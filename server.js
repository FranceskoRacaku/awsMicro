const express = require('express')
const querystring = require("querystring");
var session = require('express-session');
const app = express();
var cors = require('cors');
app.use(cors({origin: "http://localhost:4200", credentials: true, optionalSuccessStatus: 200}))
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())





// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

const port = process.env.PORT || 3000
//routers
// const holdRouter = require('./routes/holdRouter.js');
// app.use('/holds', holdRouter);


const fundRouter = require('./routes/fundRouter.js')
app.use('/funds', fundRouter)

// const userRouter = require('./routes/userRouter.js')
// app.use('/users', userRouter)

const purchaseRouter = require('./routes/purchaseRouter.js')
app.use('/purchases', purchaseRouter)

const sellRouter = require('./routes/sellRouter.js')
app.use('/sells', sellRouter)


app.get("/", (req, res)=>{
    res.send("hello world");
})

app.listen(port, () => {
console.log(`App listening at http://localhost:${port}`)
})