import type { StorybookConfig } from "@storybook/react-vite";

export default {
	stories: [
		`../**/*.mdx`,
		`../**/*.stories.@(js|jsx|mjs|ts|tsx)`,
	],
	addons: ["@storybook/addon-themes", "@storybook/addon-docs"],
	core: {
		disableTelemetry: true,
	},
	features: {
		actions: false,
		controls: false,
		interactions: false,
	},
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	typescript: {
		check: false,
		reactDocgen: false, // Speed up as we put all props in argTypes
	},
} satisfies StorybookConfig;
