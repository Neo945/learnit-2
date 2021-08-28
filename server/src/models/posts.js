const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema(
    {
        message: {
            type: String,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'member',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model('post', PostSchema);
module.exports = { Post };
