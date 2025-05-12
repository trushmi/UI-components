import type { Meta, StoryObj } from "@storybook/react";

import { SlideShow } from "../../../dist/components";
import { ImageData } from "./dataImages";

const meta = {
  title: "Example/SlideShow",
  component: SlideShow,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    images: {
      description: "Array of image objects with id, src, and alt properties.",
      control: "object",
    },
    isNavButtons: {
      description: "Whether to display navigation buttons.",
      control: "boolean",
    },
    intervalInMilliseconds: {
      description: "Interval in milliseconds between image transitions.",
      control: "number",
    },
  },
  args: {
    images: [
      {
        id: "1",
        img: "https://picsum.photos/id/100/600/400",
        alt: "Ocean waves crashing on a sandy beach",
      },
      {
        id: "2",
        img: "https://picsum.photos/id/120/600/400",
        alt: "Starry night sky",
      },
      {
        id: "3",
        img: "https://picsum.photos/id/237/600/400",
        alt: "Dog looking intently at the camera with curious eyes",
      },
    ] satisfies ImageData[],
    isNavButtons: false,
    intervalInMilliseconds: 3000,
  },
} satisfies Meta<typeof SlideShow>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {
    images: [
      {
        id: "basic-1",
        img: "https://picsum.photos/id/200/600/400",
        alt: "Basic image 1",
      },
      {
        id: "basic-2",
        img: "https://picsum.photos/id/201/600/400",
        alt: "Basic image 2",
      },
    ],
    isNavButtons: false,
    intervalInMilliseconds: 2000,
  },
};

export const WithNavigation: StoryObj<typeof meta> = {
  args: {
    images: [
      {
        id: "nav-1",
        img: "https://picsum.photos/id/300/600/400",
        alt: "Image with navigation 1",
      },
      {
        id: "nav-2",
        img: "https://picsum.photos/id/301/600/400",
        alt: "Image with navigation 2",
      },
      {
        id: "nav-3",
        img: "https://picsum.photos/id/302/600/400",
        alt: "Image with navigation 3",
      },
    ],
    isNavButtons: true,
    intervalInMilliseconds: 4000,
  },
};

export const SlowTransition: StoryObj<typeof meta> = {
  args: {
    images: [
      {
        id: "slow-1",
        img: "https://picsum.photos/id/400/600/400",
        alt: "Slow transition image 1",
      },
      {
        id: "slow-2",
        img: "https://picsum.photos/id/401/600/400",
        alt: "Slow transition image 2",
      },
    ],
    isNavButtons: false,
    intervalInMilliseconds: 6000,
  },
};

export const ManyImages: StoryObj<typeof meta> = {
  args: {
    images: [
      {
        id: "many-1",
        img: "https://picsum.photos/id/500/600/400",
        alt: "Many images 1",
      },
      {
        id: "many-2",
        img: "https://picsum.photos/id/501/600/400",
        alt: "Many images 2",
      },
      {
        id: "many-3",
        img: "https://picsum.photos/id/502/600/400",
        alt: "Many images 3",
      },
      {
        id: "many-4",
        img: "https://picsum.photos/id/503/600/400",
        alt: "Many images 4",
      },
      {
        id: "many-5",
        img: "https://picsum.photos/id/504/600/400",
        alt: "Many images 5",
      },
    ],
    isNavButtons: true,
    intervalInMilliseconds: 2500,
  },
};
