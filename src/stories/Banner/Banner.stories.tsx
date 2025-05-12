import type { Meta, StoryObj } from "@storybook/react";

import { Banner, BannerProps } from "../../../dist/components";
import { useState } from "react";

function BannerDemo(props: BannerProps) {
  const [bannerVisible, setBannerVisible] = useState<boolean>(false);

  const showBanner = () => {
    setBannerVisible(true);
  };

  const closeBanner = () => {
    setBannerVisible(false);
  };
  const action = bannerVisible ? "Close" : "Show";

  return (
    <div className="component-wrapper">
      <button onClick={showBanner} aria-label="Show  banner">
        {action} banner
      </button>

      {bannerVisible && (
        <Banner
          {...props}
          onClose={closeBanner}
          isVisible={bannerVisible}
        ></Banner>
      )}
    </div>
  );
}

const meta = {
  title: "Example/Banner",
  component: BannerDemo,
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
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    theme: {
      description: "The color theme of the banner.",
      control: "select",
      options: ["green", "blue", "red", "purple"],
    },
    size: {
      description: "The vertical size of the banner.",
      control: "select",
      options: ["sm", "md", "lg"],
    },
    position: {
      description: "The position of the banner on the screen.",
      control: "select",
      options: ["top", "bottom"],
    },
    children: {
      description: "The content to be displayed within the banner.",
      control: "text",
    },
    onClose: {
      description: "Callback function to handle closing the banner.",
      action: "onClose",
    },
    isVisible: {
      description: "Controls whether the banner is currently visible.",
      control: "boolean",
    },
  },
  args: {
    theme: "green",
    size: "md",
    position: "top",
    children: "Welcome to our website! This is an example banner.",
    onClose: () => console.log("Banner closed"),
    isVisible: true,
  },
} satisfies Meta<typeof Banner>;

export default meta;

export const TopBanner: StoryObj<typeof meta> = {
  args: {
    position: "top",
    children: "Important announcement at the top of the page.",
  },
};

export const BottomBanner: StoryObj<typeof meta> = {
  args: {
    position: "bottom",
    theme: "blue",
    children: "Footer banner with additional information.",
  },
};

export const SmallBanner: StoryObj<typeof meta> = {
  args: {
    size: "sm",
    theme: "red",
    children: "Small banner message.",
  },
};

export const LargeBanner: StoryObj<typeof meta> = {
  args: {
    size: "lg",
    theme: "purple",
    children: "Large banner with more prominent messaging.",
  },
};

export const WithCloseButton: StoryObj<typeof meta> = {
  args: {
    children: "Banner with a close button.",
  },
};

export const CustomContent: StoryObj<typeof meta> = {
  args: {
    children: (
      <>
        <h2>Special Offer!</h2>
        <p>Get 20% off your first order.</p>
      </>
    ),
  },
};
