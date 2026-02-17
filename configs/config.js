import dotenv from 'dotenv';

dotenv.config(); 

export const config = {
    db: {
        mongoURI: process.env.MONGO_URI,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN,
    },
    smtp: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
    },
    uploadPath: process.env.UPLOAD_PATH || './uploads',
};