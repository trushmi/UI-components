import type { Meta, StoryObj } from "@storybook/react";

import { FlashCards } from "../../../dist/components";
import { FlashCardData } from "./flashcardsData";

const meta = {
  title: "Example/FlashCards",
  component: FlashCards,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    flashCardsData: {
      description:
        "Array of flash card data objects with front and back content.",
      control: "object",
    },
  },
  args: {
    flashCardsData: [
      { id: "1", front: "Question 1", back: "Answer 1" },
      { id: "2", front: "Question 2", back: "Answer 2" },
      { id: "3", front: "Question 3", back: "Answer 3" },
    ] satisfies FlashCardData[],
  },
} satisfies Meta<typeof FlashCards>;

export default meta;

export const Basic: StoryObj<typeof meta> = {};

export const WithDifferentContent: StoryObj<typeof meta> = {
  args: {
    flashCardsData: [
      {
        id: "4",
        front: "What is React?",
        back: "A JavaScript library for building user interfaces.",
      },
      {
        id: "5",
        front: "What are components?",
        back: "Reusable building blocks of a React application.",
      },
    ],
  },
};

export const ManyCards: StoryObj<typeof meta> = {
  args: {
    flashCardsData: [
      { id: "8", front: "Card A", back: "Back of A" },
      { id: "9", front: "Card B", back: "Back of B" },
      { id: "10", front: "Card C", back: "Back of C" },
      { id: "11", front: "Card D", back: "Back of D" },
      { id: "12", front: "Card E", back: "Back of E" },
    ],
  },
};
