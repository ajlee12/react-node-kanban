import express from 'express';

import cards from './cards/cardsRoutes';

const app = express();

app.use(express.json());

app.use('/cards', cards);

export default app;