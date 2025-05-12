import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { TextArea, TextAreaProps } from "../../../dist/components";
import { useState } from "react";

function TextAreaDemo(props: TextAreaProps) {
  const [dynamicVal, setDynamicVal] = useState("");
  return (
    <div>
      <TextArea
        {...props}
        value={dynamicVal}
        onChange={(e) => setDynamicVal(e.target.value)}
      />
    </div>
  );
}

const meta = {
  title: "Example/TextArea",
  component: TextAreaDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "The label for the text area.",
      control: "text",
    },
    isRequired: {
      description: "Indicates if the text area is a required field.",
      control: "boolean",
    },
    placeholderText: {
      description:
        "The placeholder text displayed when the text area is empty.",
      control: "text",
    },
    disabled: {
      description: "Indicates if the text area is disabled.",
      control: "boolean",
    },
    readOnly: {
      description: "Indicates if the text area is read-only.",
      control: "boolean",
    },
    rows: {
      description: "The visible number of lines in the text area.",
      control: "number",
    },
    cols: {
      description:
        "The visible width of the text area in average character widths.",
      control: "number",
    },
    value: {
      description: "The current value of the text area.",
      control: "text",
    },
    onChange: {
      description:
        "Callback function triggered when the value of the text area changes.",
      action: "onChange",
    },
    autoFocus: {
      description:
        "Indicates if the text area should automatically have focus when the page loads.",
      control: "boolean",
    },
    name: {
      description: "The name of the text area element (for form submission).",
      control: "text",
    },
    form: {
      description: "The ID of the form the text area belongs to.",
      control: "text",
    },
    spellCheck: {
      description:
        "Specifies whether the text area should have spell checking enabled.",
      control: "boolean",
    },
    wrap: {
      description: "Specifies how the text in the text area should wrap.",
      control: { type: "select", options: ["soft", "hard", "off"] },
    },
    resize: {
      description:
        "Specifies if and how the text area can be resized by the user.",
      control: {
        type: "select",
        options: ["none", "both", "horizontal", "vertical"],
      },
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof TextArea>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {
    id: "basic-textarea",
    label: "Tell us something:",
    placeholderText: "Start typing here...",
    isRequired: false,
    value: "",
  },
};

export const RequiredField: StoryObj<typeof meta> = {
  args: {
    id: "required-textarea",
    label: "Your feedback:",
    isRequired: true,
    placeholderText: "This field is required.",
    value: "",
  },
};

export const WithMaxLength: StoryObj<typeof meta> = {
  args: {
    id: "maxlength-textarea",
    label: "Keep it short:",
    placeholderText: "Maximum 50 characters.",
    maxLength: 50,
    isRequired: false,
    value: "",
  },
};

export const WithMinLength: StoryObj<typeof meta> = {
  args: {
    id: "minlength-textarea",
    label: "Tell us more:",
    placeholderText: "Minimum 20 characters.",
    minLength: 20,
    isRequired: false,
    value: "",
  },
};

export const CustomRowsAndCols: StoryObj<typeof meta> = {
  args: {
    id: "rows-cols-textarea",
    label: "Larger area:",
    rows: 5,
    cols: 60,
    placeholderText: "Adjusted dimensions.",
    isRequired: false,
    value: "",
  },
};

export const AutoFocus: StoryObj<typeof meta> = {
  args: {
    id: "autofocus-textarea",
    label: "Focused on load:",
    placeholderText: "This will be focused when the story loads.",
    autoFocus: true,
    isRequired: false,
    value: "",
  },
};

export const SpellCheckEnabled: StoryObj<typeof meta> = {
  args: {
    id: "spellcheck-textarea",
    label: "Check your spelling:",
    placeholderText: "Type something with typos.",
    spellCheck: true,
    isRequired: false,
    value: "",
  },
};

export const SoftWrap: StoryObj<typeof meta> = {
  args: {
    id: "softwrap-textarea",
    label: "Soft wrap:",
    placeholderText: "Text will wrap within the visible area.",
    wrap: "soft",
    isRequired: false,
    value: "",
  },
};

export const VerticalResize: StoryObj<typeof meta> = {
  args: {
    id: "vertical-resize-textarea",
    label: "Vertically resizable:",
    placeholderText: "Try resizing vertically.",
    resize: "vertical",
    isRequired: false,
    value: "",
  },
};
