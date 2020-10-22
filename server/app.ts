import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

import cards from './cards/cardsRoutes';

const app = express();

app.use(express.json());

app.use('/cards', cards);

app.use('/', express.static(path.join(__dirname, '../build')));

/*
 * Bad route handler
 */
app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new Error('Not Found');
  
  return res.status(404).json(err);
});

/*
 * Express.next(err) global error handler
 */
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const errMessage = `Error details: ${err}`;

  console.error(`Error occurred in ${res.locals.errLocation}; ${errMessage}`);

  return res.status(500).json({ message: errMessage });
});

export default app;
