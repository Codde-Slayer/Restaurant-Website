const controller = require("../controllers/dish.controllers");

module.exports = function (app) {
    app.post("/create_dish", controller.createDish);

    app.get("/dish/:dishId", controller.getDish);

    app.delete("/dish/:dishId", controller.deleteDish);

    app.patch("/dish/:dishId", controller.updateDish);
    
    app.get("/dishes", controller.getDishes);




}