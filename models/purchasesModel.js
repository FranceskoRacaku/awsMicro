module.exports = (sequelize, DataTypes) => {

    const Purchase = sequelize.define('purchase',  {
        id: { // the id will be our primary key for accessing customer data
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
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

    });
    return Purchase
}