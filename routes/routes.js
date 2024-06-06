const express = require("express");
const router = express.Router();
const db = require("../model/db");
const controller = require("../controller/controller");

router.post("/restaurants", controller.createRestaurant);
router.get("/restaurants/:id", controller.getRestaurantById);
router.put("/restaurants/:id", controller.updateRestaurantById);
router.delete("/restaurants/:id", controller.deleteRestaurantById);
router.get("/restaurants", controller.getAllRestaurants);

module.exports = router;
