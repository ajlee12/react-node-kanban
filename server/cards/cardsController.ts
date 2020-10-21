import { Request, Response, NextFunction } from 'express';

class CardsController {

  addCard(req: Request, res: Response, next: NextFunction) {
    // const { name, comments } = req.body;
    console.log('*** inside CardsController.addCard ***')
  }
}

export default CardsController;
