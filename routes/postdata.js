const { Router } = require('express');
const smsController = require('../controllers/sendSmsController');

const route = new Router();

route.post("/", smsController)

//* Show Endpoint And guidence
route.get("/", (req, res) => {
    res.send("Welcome")
})

module.exports = route