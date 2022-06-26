const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ReactionsSchema = new Schema(
    {

    }
);

const ThoughtsSchema = new Schema(
    {

    }
);

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;