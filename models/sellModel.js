module.exports = (sequelize, DataTypes) => {

    const Sell = sequelize.define('sell',  {
        id: { // the id will be our primary key for accessing customer data
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            unique: true
        },

        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }, 


        fundId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }, 

        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 

        previousBalance: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 

    });
    return Sell
}