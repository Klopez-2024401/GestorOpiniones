import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import { connectDB } from './configs/db.js';
import { configureCORS } from './configs/cors-configuration.js';
import { configureHelmet } from './configs/helmet-configuration.js';
import userRoutes from './src/User/user.routes.js';
import postRoutes from './src/Post/post.routes.js';
import commentRoutes from './src/Comment/comment.routes.js';

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(morgan('dev'));
configureCORS(app);
configureHelmet(app);

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});