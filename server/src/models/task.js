const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['todo', 'in-progress', 'done'],
            default: 'todo',
        },
        classroom: {
            type: Schema.Types.ObjectId,
            ref: 'classroom',
            required: true,
            validate: {
                validator: function (v) {
                    return mongoose.Types.ObjectId.isValid(v);
                },
            },
        },
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.model('Task', taskSchema);
module.exports = { Task };
