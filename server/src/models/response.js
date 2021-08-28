/* eslint-disable no-unused-expressions */
const mongoose = require('mongoose');
const { Answer } = require('./answer');
const { Question } = require('./question');

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
ResponseSchema.pre('save', async function (next) {
    const type = await Answer.findById((await Question.findById(this.question)).answer).type;
    if (type === 'mcq') {
        this.answerMCQ !== undefined ? next() : next(new Error('Answer is required'));
    } else if (type === 'text') {
        this.answerTF !== undefined ? next() : next(new Error('Answer is required'));
    }
});
const Response = mongoose.model('response', ResponseSchema);
module.exports = { Response };
