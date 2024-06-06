const Restaurant = require("../model/db");

const createRestaurant = async (req, res) => {
    try {
        const { name, address, telephone } = req.body;
        const existingRestaurant = await Restaurant.findOne({
            name,
            address,
            telephone,
        });

        if (existingRestaurant) {
            return res.status(409).json({
                message: "Restaurant already exists in the database",
            });
        }

        const restaurant = new Restaurant(req.body);
        await restaurant.save();
        res.status(201).json({
            restaurant: restaurant,
            message: "Restaurant created successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: "Failed to create restaurant",
            error: error,
        });
    }
};

const getRestaurantById = async (req, res) => {
    const isValidObjectId = (id) => /^[0-9a-fA-F]{24}$/.test(id);

    if (!isValidObjectId(req.params.id)) {
        return res.status(400).json({
            message: "Invalid ID format",
        });
    }
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({
                message: "Restaurant not found",
            });
        }
        res.status(200).json({
            restaurant: restaurant,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to fetch restaurant",
            error: error,
        });
    }
};

const updateRestaurantById = async (req, res) => {
    const isValidObjectId = (id) => /^[0-9a-fA-F]{24}$/.test(id);

    if (!isValidObjectId(req.params.id)) {
        return res.status(400).json({
            message: "Invalid ID format",
        });
    }
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!restaurant) {
            return res.status(404).json({
                message: "Restaurant not found",
            });
        }
        res.status(200).json({
            restaurant: restaurant,
            message: "Restaurant updated successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to update restaurant",
            error: error,
        });
    }
};

const deleteRestaurantById = async (req, res) => {
    const isValidObjectId = (id) => /^[0-9a-fA-F]{24}$/.test(id);

    if (!isValidObjectId(req.params.id)) {
        return res.status(400).json({
            message: "Invalid ID format",
        });
    }
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
        if (!restaurant) {
            return res.status(404).json({
                message: "Restaurant not found",
            });
        }
        res.status(200).json({
            message: "Restaurant deleted successfully",
            restaurant: restaurant,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to delete restaurant",
            error: error,
        });
    }
};

const getAllRestaurants = async (req, res) => {
    try {
        const restaurant = await Restaurant.find({});
        res.status(200).send(restaurant);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to fetch all restaurants",
            error: error,
        });
    }
};

module.exports = {
    createRestaurant,
    getRestaurantById,
    updateRestaurantById,
    deleteRestaurantById,
    getAllRestaurants,
};
