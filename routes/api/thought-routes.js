const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require("../../controllers/thoughts-controller")

router.route("/")
    .get(getAllThoughts)
    .post(createThought);

router.route("/:id")
    .get(getThoughtById)
    .delete(deleteThought);

router.route("/:thoughtId/reactions")
    .post(addReaction);

router.route("/:thoughtId/reactions/:reactionId")
    .delete(deleteReaction);


module.exports = router;