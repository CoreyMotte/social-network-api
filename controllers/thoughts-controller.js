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

    createThought({ body }, res) {
        console.log(body);
        Thoughts.create(body)
          .then((thoughtData) => {
            return User.findOneAndUpdate(
              { _id: body.userId },
              { $push: { thoughts: thoughtData._id } },
              { new: true }
            );
          })
          .then((dbUserData) => {
            if (!dbUserData) {
              res.status(404).json({ message: "No user found with this ID!" });
              return;
            }
            res.json(dbUserData);
          })
          .catch((err) => res.json(err));
      },
}

module.exports = thoughtsController;