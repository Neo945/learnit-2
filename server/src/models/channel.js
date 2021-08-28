const mongoose = require('mongoose');

const { Schema } = mongoose;

const channelSchema = new Schema({
    classroom: {
        type: Schema.Types.ObjectId,
        ref: 'classroom',
        required: true,
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'post',
        },
    ],
});

const Channel = mongoose.model('channel', channelSchema);
module.exports = { Channel };
