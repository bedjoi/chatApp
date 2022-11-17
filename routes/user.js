const router = require("express").Router();
const {catchErrors} =  require("../handlers/errorHandlers");

router.post("login", catchErrors(userController.login));
router.post("register", catchErrors(userController.register));