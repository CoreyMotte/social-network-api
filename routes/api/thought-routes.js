const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought
} = require("../../controllers/thoughts-controller")

router.route("/").get(getAllThoughts).post(createThought);

module.exports = router;