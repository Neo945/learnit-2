/* eslint-disable no-await-in-loop */
const { errorHandler } = require('../utils/modelErrorHandler');
const { Assignment } = require('../models/assignment');
const { Aresponse } = require('../models/Aresponse');
const { Question } = require('../models/question');
const { Answer } = require('../models/answer');
const { Response } = require('../models/response');

module.exports = {
    getAssignment: async (req, res) => {
        errorHandler(
            req,
            res,
            async () => {
                const { id } = req.body;
                const assignment = await Assignment.find({ classroom: id });
                res.status(200).json({ assignment });
            },
            403
        );
    },
    getTeacherAssignment: async (req, res) => {
        errorHandler(
            req,
            res,
            async () => {
                const { _id } = req.user;
                if (req.user.isTeacher)
                    res.status(200).json({
                        message: 'success',
                        assignment: { ...(await Assignment.find({ createdBy: _id })) },
                    });
                else res.status(403).json({ message: 'not Authorized' });
            },
            403
        );
    },
    getRemainingAssignment: async (req, res) => {
        errorHandler(
            req,
            res,
            async () => {
                const { _id } = req.user;
                const totalresponse = await Aresponse.find({ user: _id });
                const idl = totalresponse.map((item) => item._id);
                const assignment = await Assignment.find({ _id: { $nin: idl } });
                res.status(200).json({ message: 'success', ...assignment });
            },
            403
        );
    },
    createAssignment: async (req, res) => {
        errorHandler(
            req,
            res,
            async () => {
                const { _id } = req.user;
                const { title, description, classroom, dueDate } = req.body;
                const { question } = req.body;
                const ass = await Assignment.create({ title, description, classroom, createdBy: _id, dueDate });
                // eslint-disable-next-line no-restricted-syntax
                for (const i of question) {
                    const answer = await Answer.create({ ...i.answer });
                    const newQuestion = await Question.create({ question: i.question, answer: answer._id });
                    await Assignment.findByIdAndUpdate(ass._id, { $push: { question: newQuestion._id } });
                }
                res.status(201).json({ message: 'success', ...ass });
            },
            403
        );
    },
    getResponse: async (req, res) => {
        errorHandler(
            req,
            res,
            async () => {
                const { respose, ass } = req.body;
                const assignment = await Assignment.create({ assessment: ass, user: req.user._id });
                // eslint-disable-next-line no-restricted-syntax
                for (const i of respose) {
                    const response = await Response.create({
                        question: i.question,
                        answerMCQ: i.answer,
                        answerTF: i.answerTF,
                    });
                    await Assignment.findByIdAndUpdate(assignment._id, { $push: { response: response._id } });
                }
                res.status(201).json({ message: 'success', ...ass });
            },
            403
        );
    },
};
