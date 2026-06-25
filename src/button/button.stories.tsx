import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import "../styles.css";

const meta = {
	title: "Button",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div style={{ display: "grid", justifyContent: "start", gap: '1em' }}>
			<Button data-variant="primary">
				Primary
			</Button>
			<Button data-variant="secondary">
				Secondary
			</Button>
			<Button data-variant="tertiary">
				Tertiary
			</Button>
			<Button data-variant="tag">
				Tag
			</Button>
			<Button data-size="lg">
				Large
			</Button>
			<Button data-size="md">
				Medium
			</Button>
			<Button data-size="sm">
				Small
			</Button>
			<Button data-tooltip="Hei">
				🌟
			</Button>
			<Button aria-busy="true" data-variant="tertiary">
				Loading
			</Button>
			<Button asChild>
				<a href="#">As Link</a>
			</Button>
		</div>
	),
};
