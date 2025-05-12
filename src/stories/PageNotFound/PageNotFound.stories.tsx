import type { Meta, StoryObj } from "@storybook/react";

import PageNotFound from "../../../dist/components/PageNotFound/PageNotFound";

const meta = {
  title: "Example/PageNotFound",
  component: PageNotFound,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    message: {
      description: "The main message to display on the page not found screen.",
      control: "text",
    },
    homePageLink: {
      description: "The URL for the 'Go home' link.",
      control: "text",
    },
    homePageLinkText: {
      description: "The text for the 'Go home' link.",
      control: "text",
    },
  },
  args: {
    message: "The page you were looking for doesn’t exist;",
    homePageLink: "/",
    homePageLinkText: "Go home",
  },
} satisfies Meta<typeof PageNotFound>;

export default meta;

export const Default: StoryObj<typeof meta> = {};

export const CustomMessage: StoryObj<typeof meta> = {
  args: {
    message: "Oops! We couldn't find that page.",
  },
};

export const DifferentLinkText: StoryObj<typeof meta> = {
  args: {
    homePageLinkText: "Return to the homepage",
  },
};

export const CustomLink: StoryObj<typeof meta> = {
  args: {
    homePageLink: "/dashboard",
    homePageLinkText: "Go to Dashboard",
  },
};

export const AllCustomizations: StoryObj<typeof meta> = {
  args: {
    message: "Looks like you're lost!",
    homePageLink: "/app",
    homePageLinkText: "Back to App",
  },
};
