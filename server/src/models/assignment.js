const mongoose = require('mongoose');
const { Member } = require('./user');

const { Schema } = mongoose;

const AssignmentSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        dueDate: {
            type: Date,
            required: true,
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
        question: [
            {
                type: Schema.Types.ObjectId,
                ref: 'question',
                validate: {
                    validator: function (v) {
                        return mongoose.Types.ObjectId.isValid(v);
                    },
                },
            },
        ],
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'member',
            required: true,
            validate: {
                validator: async function (v) {
                    return mongoose.Types.ObjectId.isValid(v) && (await Member.findById(v)).isTeacher;
                },
            },
        },
    },
    {
        timestamps: true,
    }
);

const Assignment = mongoose.model('assignment', AssignmentSchema);
module.exports = { Assignment };
