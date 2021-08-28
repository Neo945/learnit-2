const mongoose = require('mongoose');

const { Schema } = mongoose;

const questionSchema = new Schema(
    {
        question: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 1000,
        },
        answer: {
            type: mongoose.Types.ObjectId,
            ref: 'answer',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Question = mongoose.model('question', questionSchema);
module.exports = { Question };
