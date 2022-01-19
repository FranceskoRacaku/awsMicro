const express = require('express')
const querystring = require("querystring");
var session = require('express-session');
const { process_params } = require("express/lib/router");
const { URLSearchParams } = require("url");
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())


const port = process.env.PORT || 3000
//routers
// const holdRouter = require('./routes/holdRouter.js');
// app.use('/holds', holdRouter);

const fundRouter = require('./routes/fundRouter.js')
app.use('/fundss', fundRouter)

const userRouter = require('./routes/userRouter.js')
app.use('/userss', userRouter)

const purchaseRouter = require('./routes/purchaseRouter.js')
app.use('/purchasess', purchaseRouter)



app.set("view engine", "ejs");

app.get('/', (req, res) => {

    res.render("main");
})

app.get("/funds", (req,res) => {
    
        res.render("funds");
    
});

app.get("/purchases", (req,res) => {

        res.render("purchases");
});

app.get("/users", (req,res) => {

        res.render("users");
    
});

app.listen(port, () => {
console.log(`App listening at http://localhost:${port}`)
})