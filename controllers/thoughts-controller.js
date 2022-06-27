const { Thoughts, User } = require('../models');

const thoughtsController = {

    getAllThoughts(req, res) {
        Thoughts.find({})
            .populate({
                path: "reactions",
                select: "_id",
            })
            // .populate({
            //     path: "Thoughts",
            //     select: "-__v"
            // })
            .select("-__v")
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getThoughtById({ params }, res) {
        Thoughts.findOne({ _id: params.id })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: "No thoughts found with this ID." });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    createThought({params, body}, res) {
        Thoughts.create(body)
        .then(({_id}) => {
            return Users.findOneAndUpdate({ _id: params.userId}, {$push: {thoughts: _id}}, {new: true});
        })
        .then(dbThoughtsData => {
            if(!dbThoughtsData) {
                res.status(404).json({message: 'No thoughts with this particular ID!'});
                return;
            }
            res.json(dbThoughtsData)
        })
        .catch(err => res.json(err)); 
    },
}

module.exports = thoughtsController;