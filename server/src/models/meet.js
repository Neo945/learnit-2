const mongoose = require('mongoose');

const { Schema } = mongoose;

const meetSchema = new Schema(
    {
        classroom: {
            type: Schema.Types.ObjectId,
            ref: 'classroom',
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        repeat: {
            type: Boolean,
            required: true,
        },
        day: {
            type: String,
            required: true,
            trim: true,
            enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Everyday'],
        },
        startTime: {
            type: String,
            required: true,
            trim: true,
        },
        endTime: {
            type: String,
            required: true,
            trim: true,
        },
        date: {
            type: Date,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

meetSchema.pre('save', function (next) {
    if (this.repeat) {
        // eslint-disable-next-line no-unused-expressions
        this.day === null ? next() : next(new Error('Day is required'));
    }
});

const Meet = mongoose.model('Meet', meetSchema);
module.exports = Meet;
