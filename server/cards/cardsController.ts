import { Request, Response, NextFunction } from 'express';

class CardsController {

  addCard(req: Request, res: Response, next: NextFunction) {
    const { name, comments } = req.body;
    console.log('*** inside CardsController.addCard ***', `name: ${name}, comments: ${comments}`);
    console.log('req.body:', req.body)


    return next();
  }
}

export default CardsController;
