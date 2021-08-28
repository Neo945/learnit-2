/* eslint-disable no-return-await */
const mongoose = require('mongoose');
const validator = require('validator').default;
const { Member } = require('./user');

const { Schema } = mongoose;

const classroomSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 50,
            validate: {
                validator: (name) => validator.isAlphanumeric(name),
            },
        },
        description: {
            type: String,
            trim: true,
            minlength: 3,
            maxlength: 500,
        },
        teacher: {
            type: Schema.Types.ObjectId,
            ref: 'member',
            required: true,
            validate: {
                validator: async (user) =>
                    mongoose.Types.ObjectId.isValid(user) && user.isTeacher && (await Member.exists({ _id: user })),
                message: 'You are not a teacher teacher',
            },
        },
        students: [
            {
                type: Schema.Types.ObjectId,
                ref: 'member',
                validate: {
                    validator: async (user) =>
                        mongoose.Types.ObjectId.isValid(user) && !user.isTeacher && (await Member.exists({ _id: user })),
                    message: 'You are not a student',
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Classroom = mongoose.model('classroom', classroomSchema);
module.exports = Classroom;
