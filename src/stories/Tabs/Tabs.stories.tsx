import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "../../../dist/components";
import { Loader } from "../../../dist/components";
import { ReactNode } from "react";

const meta = {
  title: "Example/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tabConfig: {
      description: "Configuration object for the tabs.",
      control: "object",
    },
  },
  args: {
    tabConfig: {
      "tab-1": { label: "Tab 1", content: "My tab 1 content" },
      "tab-2": { label: "Tab 2", content: "My tab 2 content" },
      "tab-3": { label: "Tab 3", content: "My tab 3 content" },
    } satisfies Record<string, { label: string; content: ReactNode }>,
  },
} satisfies Meta<typeof Tabs>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {
    tabConfig: {
      "basic-1": { label: "Basic Tab 1", content: "Basic tab 1 content" },
      "basic-2": { label: "Basic Tab 2", content: "Basic tab 2 content" },
    },
  },
};

export const WithImage: StoryObj<typeof meta> = {
  args: {
    tabConfig: {
      "image-1": { label: "Image Tab 1", content: "Image tab 1 content" },
      "image-2": {
        label: "Image Tab 2",
        content: (
          <div>
            Image tab 2 content.
            <img
              src="https://picsum.photos/id/15/1440/900"
              style={{ width: "100px", height: "100px", display: "block" }}
            />
          </div>
        ),
      },
    },
  },
};

export const MultipleTabs: StoryObj<typeof meta> = {
  args: {
    tabConfig: {
      "tab-a": { label: "Tab A", content: "Content for Tab A" },
      "tab-b": { label: "Tab B", content: "Content for Tab B" },
      "tab-c": {
        label: "Tab C",
        content: <Loader type="circle" text="Loading..." />,
      },
      "tab-d": { label: "Tab D", content: "Content for Tab D" },
    },
  },
};
