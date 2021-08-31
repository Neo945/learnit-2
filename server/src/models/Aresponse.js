const mongoose = require('mongoose');

const { Schema } = mongoose;

const AresponseSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        response: [
            {
                type: Schema.Types.ObjectId,
                ref: 'response',
            },
        ],
        assessment: {
            type: Schema.Types.ObjectId,
            ref: 'assessment',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Aresponse = mongoose.model('aresponse', AresponseSchema);
module.exports = { Aresponse };
