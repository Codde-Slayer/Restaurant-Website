const { Sequelize } = require("sequelize");

module.exports = (sequelise, Sequelize) => {
    const Dish = sequelise.define("dish", {
        DishId: {
            type: Sequelize.INTEGER,
            primarykey: true,
            allowNull: false,
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        ingredients: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        origin: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        recipe: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        available: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        
    });
    return Dish;
}