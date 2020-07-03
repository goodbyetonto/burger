const { Sequelize } = require("sequelize/types");

module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
                len: [1, 30]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN, 
            defaultValue: false
        } 
    });
    return Burger;
};

