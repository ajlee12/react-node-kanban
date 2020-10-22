import express, { Request, Response } from 'express';
import CardsController from './cardsController';
const router = express.Router();

const cardsController = new CardsController();

// Creating a card.
router.post('/',
  cardsController.addCard,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals.newCardId);
  }
);

// Updating the status of a card.
router.put('/',
  cardsController.changeStatus,
  (req: Request, res: Response) => {
    res.sendStatus(200);
  }
);

export default router;