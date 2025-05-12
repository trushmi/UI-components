import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "../../../dist/components/Modal/Modal";
import { useState } from "react";
import { ModalProps } from "../../../dist/components";

function ModalDemo(props: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        aria-label="Open modal"
        className="open-modal-btn"
      >
        Open modal view
      </button>
      {isModalOpen && (
        <Modal {...props} onCloseModal={handleCloseModal}>
          {props.children}
        </Modal>
      )}
    </div>
  );
}

const meta = {
  title: "Example/Modal",
  component: ModalDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onCloseModal: {
      description: "Callback function to handle closing the modal.",
      action: "onCloseModal",
    },
    children: {
      description: "The content to be rendered inside the modal.",
      control: "text",
    },
  },
  args: {
    children: "This is the content of the modal.",
    onCloseModal: () => console.log("Close button clicked"),
  },
} satisfies Meta<typeof Modal>;

export default meta;

export const Basic: StoryObj<typeof meta> = {};

export const WithCustomContent: StoryObj<typeof meta> = {
  args: {
    children: (
      <div>
        <h2>Custom Content</h2>
        <p>This modal has some custom text and elements.</p>
        <button onClick={() => alert("Custom action")}>Click Me</button>
      </div>
    ),
  },
};

export const LongContent: StoryObj<typeof meta> = {
  args: {
    children: (
      <div>
        <h2>Long Content Modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </div>
    ),
  },
};
