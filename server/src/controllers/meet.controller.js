const { errorHandler } = require('../utils/modelErrorHandler');
const Meet = require('../models/meet');
const Classroom = require('../models/classroom');

module.export = {
    schedule: async (req, res) => {
        errorHandler(
            res,
            req,
            async () => {
                const { title, repeat, description, date, day, startTime, endTime, location, classroom } = req.body;
                const meet = await Meet.create({
                    title,
                    repeat,
                    day,
                    description,
                    date,
                    startTime,
                    endTime,
                    location,
                    classroom,
                });
                res.status(201).json({ message: 'Meet created successfully', ...meet });
            },
            403
        );
    },
    getMeet: async (req, res) => {
        errorHandler(
            res,
            req,
            async () => {
                const classroom = await Classroom.find({ students: { $in: [req.user._id] } });
                const meet = await Meet.find({ classroom: { $in: classroom._id } });
                res.status(200).json({ message: 'Meet found', ...meet });
            },
            403
        );
    },
};
