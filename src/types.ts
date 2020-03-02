export interface IList {
  readonly id: number;
  name: string;
  cards: ICard[];
}

export interface ICard {
  readonly id: number;
  text: string;
}

// Interface definitions for @Emit()

export interface IAddCardEvent {
  listId: number;
  text: string;
}
