import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "../../../dist/components";

const meta = {
  title: "Example/Card",
  component: Card,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#f0f0f0",
          margin: 0,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "50vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "This story showcases the `Card` component with custom content, including a title and a button.",
      },
    },
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    frontImage: {
      description: "URL of the image to display on the front of the card.",
      control: "text",
    },
    hoverImage: {
      description: "Optional URL of the image to display on hover.",
      control: "text",
    },
    cardTitle: {
      description: "The title of the card.",
      control: "text",
    },
    cardDescription: {
      description: "A brief description for the card.",
      control: "text",
    },
    externalLink: {
      description: "The URL to navigate to when the card is clicked.",
      control: "text",
    },
  },
  args: {
    cardTitle: "Card Title",
    cardDescription: "This is a brief description of the card's content.",
    frontImage:
      "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87020435_99.jpg?imwidth=1256&imdensity=1&ts=1730396049480",
    hoverImage:
      "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/outfit/S/87020435_99-99999999_01.jpg?imwidth=1256&imdensity=1&ts=1730396049480",
    externalLink:
      "https://shop.mango.com/us/en/p/women/sweaters-and-cardigans/sweaters/knit-striped-sweater_87020435?c=99",
  },
} satisfies Meta<typeof Card>;

export default meta;

export const Basic: StoryObj<typeof meta> = {};

export const CustomTitleAndDescription: StoryObj<typeof meta> = {
  args: {
    frontImage:
      "https://bananarepublicfactory.gapfactory.com/webcontent/0057/341/245/cn57341245.jpg",
    hoverImage:
      "https://bananarepublicfactory.gapfactory.com/webcontent/0057/341/382/cn57341382.jpg",
    externalLink:
      "https://bananarepublicfactory.gapfactory.com/browse/product.do?pid=592996001&cid=1045385&pcid=1045385&vid=1&cpos=0&cexp=368&kcid=CategoryIDs%3D1045385&cvar=2363&ctype=Listing&cpid=res25012120481443790011780",
    cardTitle: "Explore Our Services",
    cardDescription:
      "Discover the range of services we offer to help you succeed.",
  },
};
