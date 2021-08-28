const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { isEmail } = require('validator').default;
const { isStrongPassword, isMobilePhone } = require('validator').default;

const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Please fill the username'],
            trim: true,
            minlength: 5,
        },
        password: {
            type: String,
            trim: true,
            required: [true, 'Please fill the password'],
            validate: [isStrongPassword, 'not a strong password'],
            unique: true,
            minlength: [10, 'Password Length less than 10'],
        },
        email: {
            type: String,
            required: [true, 'Please fill the email'],
            unique: [true, 'Already have a account'],
            lowercase: true,
            trim: true,
            minlength: [10, 'Email Length less than 10'],
            validate: [isEmail, 'Invalid email'],
        },
    },
    {
        timestamps: true,
    }
);

UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.post('save', (doc, next) => {
    console.log(doc);
    next();
});
function getToken(id) {
    // eslint-disable-next-line global-require
    return jwt.sign({ id }, require('../config/config').SECRET_KEY, {
        expiresIn: 3 * 24 * 3600,
    });
}
UserSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (await bcrypt.compare(password, user.password)) {
        return getToken(user._id);
    }
    return null;
};

UserSchema.statics.savePass = async function (username, password) {
    const user = await this.findOne({ username });
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, salt);
    user.save();
};

const User = mongoose.model('user', UserSchema);

const memberSchema = new Schema({
    isTeacher: {
        type: Boolean,
        default: false,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50,
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 10,
        validate: [isMobilePhone, 'Invalid Phone number'],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        validate: {
            // eslint-disable-next-line no-return-await
            validator: async (user) => mongoose.Types.ObjectId.isValid(user) && (await User.exists({ _id: user })),
        },
    },
});

const Member = mongoose.model('member', memberSchema);
module.exports = { User, Member };
