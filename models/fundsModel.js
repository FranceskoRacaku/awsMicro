module.exports = (sequelize, DataTypes) => {

    const Fund = sequelize.define('fund', {
        id: { // the id will be our primary key for accessing customer data
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        symbol: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        inceptionDate: {
            type: DataTypes.DATE,
            allowNull: true
        },

        categoryOne: {
            type: DataTypes.STRING,
            allowNull: true
        },

        categoryTwo: {
            type: DataTypes.STRING,
            allowNull: true
        },

        categoryThree: {
            type: DataTypes.STRING,
            allowNull: true
        },

        marketCap: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        currentDividendYield: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        historicalAverageDividendYield: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        everageFactor: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },

        averageVolume: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        action: {
            type: DataTypes.STRING,
            allowNull: true
        },
        
        
    });
    return Fund
}