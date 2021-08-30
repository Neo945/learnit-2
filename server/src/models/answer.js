/* eslint-disable no-unused-expressions */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const AnswerSchema = new Schema(
    {
        typeans: {
            type: String,
            required: true,
            enum: ['text', 'multi', 'mcq'],
        },
        answerMCQ: [
            {
                type: String,
            },
        ],
        answerTF: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

AnswerSchema.pre('save', function (next) {
    if (this.typeans === 'mcq') {
        this.answerMCQ = this.answerMCQ.filter((item) => item !== '');
        this.answerMCQ.length > 0 ? next() : next(new Error('Answer is empty'));
    } else if (this.typeans === 'text') {
        this.answerTF !== '' ? next() : next(new Error('Answer is empty'));
        this.answerTF.length > 0 ? next() : next(new Error('Answer is empty'));
    }
});

const Answer = mongoose.model('answer', AnswerSchema);
module.exports = { Answer };
