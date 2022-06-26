const { Schema, model, Types, trusted } = require('mongoose');
const moment = require('moment');

const ReactionsSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 200
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        }
    }
);

const ThoughtsSchema = new Schema(
    {

    }
);

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;