import { Request, Response, NextFunction } from 'express';
import Card from './cardsModel';

class CardsController {
  async addCard(req: Request, res: Response, next: NextFunction) {
    const { name, comments, performance } = req.body;
    console.log('*** inside CardsController.addCard ***\n', `name: ${name}, comments: ${comments}`);

    try {
      // If saving a card is successful, send back the unique ID to client.
      const cardDoc = await Card.create({
        name,
        comments,
        performance,
      });

      console.log(`cardDoc (controller.addCard): ${cardDoc}`);
      res.locals.newCardId = cardDoc._id;

      return next();
    } catch(err) {
      res.locals.errLocation = 'CardsController.addCard';
      
      return next(err);
    }
  }
  
  async changeStatus(req: Request, res: Response, next: NextFunction) {
    try {
      
      return next();
    } catch(err) {
      res.locals.errLocation = 'CardsController.changeStatus';

      return next(err);
    }
  }
}

export default CardsController;
