const Task = require('../models/task');
const Classroom = require('../models/classroom');
const { errorHandler } = require('../utils/modelErrorHandler');
const { Tresponse } = require('../models/tresponse');
const { uploadSingle } = require('../config/s3.config');

module.exports = {
    getTask: (req, res) => {
        errorHandler(
            req,
            res,
            async () => {
                const { id } = req.body.classroom;
                const task = await Task.find({ classroom: id });
                res.status(200).json({ message: 'success', ...task });
            },
            403
        );
    },
    getUserTask: (req, res) => {
        errorHandler(
            req,
            res,
            async () => {
                const { _id } = req.user;
                const classroom = await Classroom.find({ students: { $in: [_id] } });
                const idl = classroom.map((el) => el._id);
                const task = await Task.find({ classroom: { $each: idl } });
                res.status(200).json({ message: 'success', ...task });
            },
            403
        );
    },
    getRemainingTask: (req, res) => {
        errorHandler(
            req,
            res,
            async () => {
                const { _id } = req.user;
                const subTask = await Tresponse.find({ student: _id });
                const idl = subTask.map((el) => el.task);
                const task = await Task.find({ _id: { $nin: idl } });
                res.status(200).json({ message: 'success', ...task });
            },
            403
        );
    },
    createTask: (req, res) => {
        errorHandler(
            req,
            res,
            async () => {
                if (req.user.isTeacher) {
                    const { id } = req.body.classroom;
                    const task = await Task.create({ ...req.body, classroom: id });
                    res.status(200).json({ message: 'success', ...task });
                }
                res.status(403).json({ message: 'You are not a teacher' });
            },
            403
        );
    },
    createResponse: (req, res) => {
        errorHandler(req, res, async () => {
            const { task } = req.body;
            const { _id } = req.user;
            uploadSingle(req, res, async (err) => {
                if (err) {
                    res.status(400).json({ message: err });
                } else {
                    errorHandler(
                        req,
                        res,
                        async () => {
                            const response = await Tresponse.create({ task, user: _id, responseLink: req.file.location });
                            res.status(200).json({ message: 'success', ...response });
                        },
                        403
                    );
                }
            });
        });
    },
};
