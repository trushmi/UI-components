import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "../../../dist/components";

const meta = {
  title: "Example/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "The visual style of the loader.",
      control: "select",
      options: ["circle", "square", "bar"],
    },
    text: {
      description: "Optional text to display below the loader.",
      control: "text",
    },
  },
  args: {
    type: "circle",
    text: "Loading...",
  },
} satisfies Meta<typeof Loader>;

export default meta;

export const Circle: StoryObj<typeof meta> = {
  args: {
    type: "circle",
  },
};

export const Square: StoryObj<typeof meta> = {
  args: {
    type: "square",
  },
};

export const Bar: StoryObj<typeof meta> = {
  args: {
    type: "bar",
  },
};

export const WithText: StoryObj<typeof meta> = {
  args: {
    text: "Please wait...",
  },
};

export const DifferentText: StoryObj<typeof meta> = {
  args: {
    text: "Fetching data...",
  },
};

export const NoText: StoryObj<typeof meta> = {
  args: {
    text: undefined,
  },
};
