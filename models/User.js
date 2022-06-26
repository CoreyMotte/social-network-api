const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {

    }
)

const Users = model('User', UserSchema);

module.exports = User;