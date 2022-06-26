const { Thoughts, Users } = require('../models');

const thoughtsController = {

    createThought({params, body}, res) {
        Thoughts.create(body)
        .then(({_id}) => {
            return Users.findOneAndUpdate({ _id: params.userId}, {$push: {thoughts: _id}}, {new: true});
        })
        .then(dbThoughtsData => {
            if(!dbThoughtsData) {
                res.status(404).json({message: "No thought found with this ID!"});
                return;
            }
        })
    }
}