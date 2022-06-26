const router = require('express').Router();

const {
    createThought
} = require('../../controllers/thoughts-controller')

router.route('/:userId').post(createThought);

module.exports = router;