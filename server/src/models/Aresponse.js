const mongoose = require('mongoose');

const { Schema } = mongoose;

const AresponseSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        answers: [
            {
                type: Schema.Types.ObjectId,
                ref: 'answer',
                required: true,
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Aresponse = mongoose.model('Aresponse', AresponseSchema);
module.exports = { Aresponse };
