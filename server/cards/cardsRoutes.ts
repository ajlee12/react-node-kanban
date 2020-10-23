import express, { Request, Response } from 'express';
import CardsController from './cardsController';
const router = express.Router();

const cardsController = new CardsController();

router.get('/',
  cardsController.getCardsFromDb,
  (req: Request, res: Response) => {
    res.status(200).set({'Content-Type': 'application/json'}).send(res.locals.cards);
  }
);

// Creating a card.
router.post('/',
  cardsController.addCard,
  (req: Request, res: Response) => {
    res.status(200).set({'Content-Type': 'text/plain'}).send(res.locals.newCardId);
  }
);

// Adding comments to a card.
router.post('/comments',
  cardsController.addComments,
  (req: Request, res: Response) => {
    res.status(200).set({'Content-Type': 'text/plain'}).send();
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