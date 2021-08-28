module.exports = {
    errorHandler: async function (req, res, cb, errorStatus) {
        try {
            await cb();
        } catch (err) {
            // console.log(err.message);
            const data = Object.values(err.errors);
            const error = [];
            data.forEach((ele) => {
                error.push(ele.message);
            });
            res.status(errorStatus).json({ message: error });
        }
    },
};
