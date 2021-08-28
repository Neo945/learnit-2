const mongoose = require('mongoose');
const { isURL } = require('validator').default;

const { Schema } = mongoose;

const TresponseSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'member',
            required: true,
        },
        task: {
            type: Schema.Types.ObjectId,
            ref: 'task',
            required: true,
        },
        responseLink: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            validate: [isURL, 'Invalid URL'],
        },
    },
    {
        timestamps: true,
    }
);
const Tresponse = mongoose.model('Tresponse', TresponseSchema);
module.exports = { Tresponse };
