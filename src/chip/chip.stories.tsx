import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "./chip";
import "../styles.css";

const meta = {
	title: "Chip",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div style={{ display: "grid", justifyContent: "start", gap: '1em' }}>
			<Chip data-size="lg">
				Large
			</Chip>
			<Chip data-size="md">
				Medium
			</Chip>
			<Chip data-size="sm">
				Small
			</Chip>
		</div>
	),
};
