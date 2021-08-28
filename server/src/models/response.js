const mongoose = require('mongoose');

const { Schema } = mongoose;

const ResponseSchema = new Schema(
    {
        question: {
            type: Schema.Types.ObjectId,
            ref: 'question',
            required: true,
        },
        answerMCQ: {
            type: Number,
            required: true,
            default: 0,
        },
        answerTF: {
            type: String,
            required: true,
            trim: true,
            default: '',
        },
    },
    {
        timestamps: true,
    }
);

const Response = mongoose.model('response', ResponseSchema);
module.exports = { Response };
