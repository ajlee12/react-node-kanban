export interface CardContents {
  id: string,
  name: string,
  status: string,
  comments: string[],
};

export type CardsState = CardContents[];

export interface AppState {
  cards: CardsState,
};

export type CardsAction = {
  type: string,
  payload: any,
};