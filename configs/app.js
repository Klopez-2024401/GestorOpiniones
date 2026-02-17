import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

import { configureCORS } from './configs/cors-configuration.js';
import { configureHelmet } from './configs/helmet-configuration.js';

configureCORS(app);
configureHelmet(app);

export default app;