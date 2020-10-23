import { Request, Response, NextFunction } from 'express';
import Card from './cardsModel';

type Card = {
  id: string,
  name: string,
  comments: string,
  status: string,
};

class CardsController {
  async getCardsFromDb(req: Request, res: Response, next: NextFunction) {
    console.log('*** inside CardsController.getCardsFromDb ***');

    try {
      const cardDocs = await Card.find({});

      res.locals.cards = cardDocs.map((card) => {
        return {
          id: card._id,
          name: card.name!,
          comments: card.comments,
          status: card.status,
        }
      });

      return next();
    } catch(err) {
      res.locals.errLocation = 'CardsController.getCardsFromDb';
      
      return next(err);
    }
  }

  async addCard(req: Request, res: Response, next: NextFunction) {
    const { name, comments, status } = req.body;
    console.log('*** inside CardsController.addCard ***\n', `name: ${name}, comments: ${comments}`);

    try {
      // If saving a card is successful, send back the unique ID to client.
      const cardDoc = await Card.create({
        name,
        comments,
        status,
      });

      res.locals.newCardId = cardDoc._id;

      return next();
    } catch(err) {
      res.locals.errLocation = 'CardsController.addCard';
      
      return next(err);
    }
  }
  
  async changeStatus(req: Request, res: Response, next: NextFunction) {
    const { id, status } = req.body;

    try {
      await Card.findOneAndUpdate({ _id: id }, { status });
      
      return next();
    } catch(err) {
      res.locals.errLocation = 'CardsController.changeStatus';

      return next(err);
    }
  }

  async addComments(req: Request, res: Response, next: NextFunction) {
    const { id, comments } = req.body;

    try {
      // Find the card and retrieve its existing comments array.
      const cardDoc = await Card.findOne({ _id: id });
      const existingComments = cardDoc?.comments;
      console.log(`CardsController.addComments: existing comments: ${existingComments}`);

      const updatedComments = existingComments?.concat(comments);

      await Card.findOneAndUpdate({ _id: id}, { comments: updatedComments })
      
      return next();
    } catch(err) {
      res.locals.errLocation = 'CardsController.changeStatus';

      return next(err);
    }
  }
}

export default CardsController;
