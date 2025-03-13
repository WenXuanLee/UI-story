import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    as: { control: 'text', description: 'Custom HTML tag to render (e.g., h1, span, p)' },
    type: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'subHeading', 'body', 'caption', 'small'],
      description: 'Typography type',
    },
    state: {
      control: 'select',
      options: ['default', 'primary', 'error', 'success', 'warning'],
      description: 'Text color state',
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semiBold', 'bold', 'extraBold'],
      description: 'Font weight',
    },
    children: { control: 'text', description: 'Text content to display' },
  },
  args: {
    as: 'p',
    type: 'body',
    state: 'default',
    weight: 'regular',
    children: 'This is a sample text.',
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// Default Story
export const Default: Story = {};

// Heading Variants
export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography type="h1">This is an H1</Typography>
      <Typography type="h2">This is an H2</Typography>
      <Typography type="h3">This is an H3</Typography>
      <Typography type="h4">This is an H4</Typography>
    </div>
  ),
};

// States Variants
export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography type="body" state="primary">
        This is a primary state
      </Typography>
      <Typography type="body" state="error">
        This is an error state
      </Typography>
      <Typography type="body" state="success">
        This is a success state
      </Typography>
      <Typography type="body" state="warning">
        This is a warning state
      </Typography>
    </div>
  ),
};

// Custom HTML Tag
export const CustomTag: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography as="h1" type="body">
        Body rendered as H1
      </Typography>
      <Typography as="span" type="caption" state="primary">
        Caption rendered as Span
      </Typography>
      <Typography as="small" type="small" state="error">
        Small text rendered as Small tag
      </Typography>
    </div>
  ),
};

// Font Weights
export const Weights: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography type="body" weight="regular">
        Regular weight
      </Typography>
      <Typography type="body" weight="medium">
        Medium weight
      </Typography>
      <Typography type="body" weight="semiBold">
        Semi-Bold weight
      </Typography>
      <Typography type="body" weight="bold">
        Bold weight
      </Typography>
      <Typography type="body" weight="extraBold">
        Extra-Bold weight
      </Typography>
    </div>
  ),
};
