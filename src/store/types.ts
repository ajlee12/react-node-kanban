export type CardContents = { 
  name: string,
  status: string,
  comments: string,
};

export interface CardsState {
  Applied: CardContents[],
  PhoneScreen: CardContents[],
  OnSite: CardContents[],
  Offered: CardContents[],
  Accepted: CardContents[],
  Rejected: CardContents[],
};

export interface CardsAction {
  type: string,
  payload: string,
};