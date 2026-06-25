import type { Preview } from "@storybook/react-vite";

export default {
	parameters: {
		controls: {
			disableSaveFromUI: true,
			expanded: false,
		},
		docs: {
			codePanel: true,
			canvas: {
				layout: "centered",
			},
		},
		options: {
			storySort: {
				order: [],
			},
		},
	},
} satisfies Preview;
