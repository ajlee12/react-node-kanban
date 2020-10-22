export interface CardContents {
  id: string,
  name: string,
  status: string,
  comments: string[],
};

export type CardsState = CardContents[];
// {
//   Applied: CardContents[],
//   PhoneScreen: CardContents[],
//   OnSite: CardContents[],
//   Offered: CardContents[],
//   Accepted: CardContents[],
//   Rejected: CardContents[],
  
// };

export interface AppState {
  cards: CardsState,
};

export type CardsAction = {
  type: string,
  payload: any,
};