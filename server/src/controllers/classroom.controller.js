const { errorHandler } = require('../utils/modelErrorHandler');
const Classroom = require('../models/classroom');
const { Member } = require('../models/user');
const { Channel } = require('../models/channel');

module.exports = {
    createClassroom: async (req, res) => {
        errorHandler(
            req,
            res,
            async () => {
                const { name, description } = req.body;
                if (req.user.isTeacher) {
                    const classroom = await Classroom.create({ name, description, teacher: req.user._id });
                    await Channel.create({ name: 'general', classroom: classroom._id });
                    res.status(201).json({ message: 'success', ...classroom });
                    if (req.body.students) {
                        // eslint-disable-next-line no-restricted-syntax
                        for (const i of req.body.students) {
                            // eslint-disable-next-line no-await-in-loop
                            await Classroom.findByIdAndUpdate(classroom._id, { $push: { students: i } });
                        }
                    }
                } else {
                    res.status(401).json({ message: 'unauthorized' });
                }
            },
            403
        );
    },
    addUserInClassroom: async (req, res) => {
        errorHandler(
            req,
            res,
            async () => {
                const { classroom, students } = req.body;
                if (req.user.isTeacher && req.body.students) {
                    // eslint-disable-next-line no-restricted-syntax
                    for (const i of students) {
                        // eslint-disable-next-line no-await-in-loop
                        await Classroom.findByIdAndUpdate(classroom._id, { $push: { students: i } });
                    }
                    // await Classroom.findByIdAndUpdate(classroom, { $push: { students: student } });
                    res.status(201).json({ message: 'success added student' });
                } else {
                    res.status(401).json({ message: 'unauthorized' });
                }
            },
            403
        );
    },
    removeUserInClassroom: async (req, res) => {
        errorHandler(
            req,
            res,
            async () => {
                const { classroom, student } = req.body;
                const std = await Member.findById(student);
                if (req.user.isTeacher && std) {
                    await Classroom.findByIdAndUpdate(classroom, { $pull: { students: student } });
                    res.status(201).json({ message: 'success deleted student' });
                } else {
                    res.status(401).json({ message: 'unauthorized' });
                }
            },
            403
        );
    },
};
