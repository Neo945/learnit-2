const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const env = require('./config');

const s3 = new aws.S3({
    accessKeyId: env.S3_ACCESS_KEY_ID,
    secretAccessKey: env.SECRET_S3_ACCESS_KEY,
    region: env.S3_BUCKET_REGION,
});
// eslint-disable-next-line no-unused-vars
const deleteParams = {
    Bucket: env.S3_BUCKET_NAME,
    key: '',
    Delete: {
        key: [],
    },
};
const upload = (bucket) =>
    multer({
        storage: multerS3({
            s3: s3,
            bucket: bucket,
            metadata: function (req, file, cb) {
                console.log('file metadata ', file);
                cb(null, { fieldName: file.fieldname });
            },
            key: function (req, file, cb) {
                console.log('file key ', file);
                cb(null, 'file.pdf');
            },
        }),
    });
const uploadSingle = upload(env.S3_BUCKET_NAME).single('audio');

module.exports = { uploadSingle, s3 };
