const {
    Router
} = require('express');
const path = require('path');

const utils = require('./utils');

const pageController = (req, res) => {
    res.render(`${req.params.id}`);
}


const createRoute = () => {
    const route = Router();
    route.get('/:id', pageController);

    return route;
}

const route = createRoute();
module.exports = route;