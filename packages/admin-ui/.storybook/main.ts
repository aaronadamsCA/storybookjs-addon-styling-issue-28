import type { StorybookConfig } from "@storybook/react-webpack5";

const main: StorybookConfig = {
  addons: [
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: true,
      },
    },
  ],
  framework: "@storybook/react-webpack5",
  stories: ["../src"],
};

export default main;
