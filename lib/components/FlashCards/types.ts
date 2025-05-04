export interface FlashCardProps {
  front: string;
  back: string;
  isFlipped: boolean;
  setIsFliped: (isFlipped: boolean) => void;
}

export interface FlashCardData {
  id: string;
  front: string;
  back: string;
}

export interface FlashCardsProps {
  flashCardsData: FlashCardData[];
}
