import cors from 'cors';

export const configureCORS = (app) => {
    app.use(cors({
        origin: process.env.ALLOWED_ORIGINS.split(','),  
        methods: ['GET', 'POST', 'PUT', 'DELETE'],   
    }));
};