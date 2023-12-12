const express = require('express');
const createError = require('http-errors');
const { authSchema3 } = require('../helpers/validation_schema');
const { getFoods, createFood } = require('../Models/User.model_mysqldb');

const router = express.Router();

router.post('/addFood', async (req, res, next) => {
    try {
        console.log('Received Request Body:', req.body);
        const { name } = await authSchema3.validateAsync(req.body);

        const existingFood = await getFoods();
        const nameExist = existingFood.some((food) => food.name === name);

        if (nameExist) {
            throw createError.Conflict(`${name} are already registered`);
        }

        const { food } = await createFood(name);

        res.status(201).send({ food });
    } catch (error) {
        if (error.isJoi === true) error.status = 422;
        next(error);
    }
});

module.exports = router;
