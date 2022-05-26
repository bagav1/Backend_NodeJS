module.exports = userCrud => {
    const router = require('express').Router()
    const users = require("../controllers/user.controller.js");
    const auth = require("../controllers/auth.controller.js");

    router.post("/new", users.create);
    router.get("/", users.findAll);
    router.get("/:id", users.getOne);
    router.get("/:state", users.findByState);

    userCrud.use('/user', router);
};