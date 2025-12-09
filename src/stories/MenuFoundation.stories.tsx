import type { Meta, StoryObj } from '@storybook/react'

type SectionProps = {
  title: string
  description?: string
}

const SectionPage = ({ title, description }: SectionProps) => (
  <div style={{ padding: 16, border: '1px solid #e5e7eb', borderRadius: 8 }}>
    <h3 style={{ margin: '0 0 8px', fontSize: 16 }}>{title}</h3>
    <p style={{ margin: 0, color: '#4b5563' }}>
      {description ?? 'Content will be connected to this menu item.'}
    </p>
  </div>
)

const meta: Meta<typeof SectionPage> = {
  title: '1. Foundation',
  component: SectionPage,
  parameters: {
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof SectionPage>

export const Colors: Story = {
  name: '1.1 Colors',
  args: {
    title: 'Colors',
    description: 'Palette definitions, usage, and accessibility guidance.',
  },
}

export const Typography: Story = {
  name: '1.2 Typography',
  args: {
    title: 'Typography',
    description: 'Type scale, font stacks, and text styles.',
  },
}

export const Grid: Story = {
  name: '1.3 Grid',
  args: {
    title: 'Grid',
    description: 'Layout grid rules and responsive breakpoints.',
  },
}

export const Icon: Story = {
  name: '1.4 Icon',
  args: {
    title: 'Icon',
    description: 'Icon library usage and sizing rules.',
  },
}

export const Radius: Story = {
  name: '1.5 Radius',
  args: {
    title: 'Radius',
    description: 'Corner radius scale and application examples.',
  },
}

export const Shadow: Story = {
  name: '1.6 Shadow',
  args: {
    title: 'Shadow',
    description: 'Elevation system and shadow tokens.',
  },
}
