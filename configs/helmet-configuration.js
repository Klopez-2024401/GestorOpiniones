import helmet from 'helmet';

export const configureHelmet = (app) => {
    app.use(helmet()); 
};