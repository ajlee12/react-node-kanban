export interface CardContents {
  id: string,
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

export interface AppState {
  cards: CardsState,
};

export type CardsAction = {
  type: string,
  payload: any,
};