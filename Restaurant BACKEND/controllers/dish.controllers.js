const db = require("../models")
const Dish = db.dish;

exports.createDish =(req, res) =>{
    Dish.create({
        DishId: Math.round((Math.random() + Math.random()) * 10),
        image: req.body.image,  
        name: req.body.name,  
        type: req.body.type,  
        ingredients: req.body.ingredients,  
        origin: req.body.origin,  
        description: req.body.description,  
        recipe: req.body.recipe,  
        available: true,
    })
    .then((dish) =>{
        res.status(200).json({
            dish: dish,
            messsage: "Dish has been succesfully added",
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ 
            err: "Dish not added",
        });
    });
};

exports.getDishes =(req, res ) => {
    Dish.findAll({})
    .then((dishes) => {
        res.status(200).json({dishes});
    })
    .catch((err) => {
        res.status(500).json(err);
    });
    console.log(req.params.id);
};

exports.getDish =(req, res) => {
    Dish.findOne({
        where: {dishId: req.params.dishId, available: true },
    }).then((dish) => {
        res.status(200).json({dish: dish});
    });
};

exports.deleteDish = (req, res ) => {
    Dish.destroy({
        where: { dishId: req.params.dishId}
    }).then((product) => {
        res.status(200).json({message: "Dish has been deleted "})
    });
};

exports.updateDish = (req, res ) => {
    Dish.update(
        { price: req.body.price},
        {
            where: { DishId: req.params.DishId},
        }
    ).then((dish) => {
        res.status(200).json({message: "Dish updated"});
    });
};