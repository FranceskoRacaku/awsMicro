module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('user', {
        id: { // the id will be our primary key for accessing customer data
            type: DataTypes.STRING,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            unique: true
        },

        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        userAge: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        // holdId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        
        
    });
    return User
}