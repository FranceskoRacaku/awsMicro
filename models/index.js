// require the db configuration from the dbConfig file
const dbConfig = require('../config/config')
    
// require the sequelize Constructor and Datatypes from sequelize module
const { Sequelize, DataTypes } = require('sequelize')

// construct the sequelize object using the constructor
let sequelize = null;

if (process && process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres', 
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    });
} else {
    sequelize = new Sequelize(
    { // use imported configurations from dbConfig
        database: dbConfig.DB,
        username: dbConfig.USER,
        password: dbConfig.PASSWORD,
        dialect: dbConfig.dialect,
        host: dbConfig.HOST,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    });
}
// authenticate will test the connection with DB and return a promise
sequelize.authenticate()
    .then(() => { // successfully connected to DB
        console.log("connected to Postgres DB")
    })
    .catch(e => {// failed connecting to DB
        console.log('unable to connect to Postgres DB' + e)
    })


// create a db object to work with the sequelize table
const db = {}

// create an attribute storing the sequelize instance
db.sequelize = sequelize
db.Sequelize = Sequelize;

// get the cusomters model - our table name will be cusomters as set in the following line
db.Funds = require('./fundsModel')(sequelize, DataTypes)
// db.Holds = require('./holdsModel')(sequelize, DataTypes)
db.Users = require('./usersModel')(sequelize, DataTypes)
db.Purchases = require('./purchasesModel')(sequelize, DataTypes)

// sync the db by running the model
// force: false ensure that the table is not created again on every time the program runs
db.sequelize.sync({ force: true }).then(() => {
    console.log('DB synced with sequelize')
}).catch((error) => {
    console.log('Error syncing the DB to sequelize' + error)
})

db.Purchases.belongsTo(db.Funds, {through: db.Users});
db.Funds.hasMany(db.Purchases);

db.Users.hasMany(db.Purchases);
db.Purchases.belongsTo(db.Users);


// db.Holds.hasMany(db.Users);
// db.Users.belongsTo(db.Holds);


// db.Users.hasMany(db.Purchases);
// db.Purchases.hasMany(db.Funds);
// db.Funds.belongsTo(db.Purchases);
// db.Purchases.belongsTo(db.Users);

// db.Users.belongsToMany(db.Funds, {through: db.Purchases});


// db.Holds.hasMany(db.Users);
// db.Users.belongsTo(db.Holds);


module.exports = db