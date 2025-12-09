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
  title: '0. Docs',
  component: SectionPage,
  parameters: {
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof SectionPage>

export const Introduction: Story = {
  name: '0.1 Introduction',
  args: {
    title: 'Introduction',
    description: 'Entry point for design system overview and onboarding.',
  },
}

export const Guide: Story = {
  name: '0.2 Guide',
  args: {
    title: 'Guide',
    description: 'Guidelines and principles for using the design system.',
  },
}

export const Writing: Story = {
  name: '0.3 Writing',
  args: {
    title: 'Writing',
    description: 'Writing tone, terminology, and microcopy standards.',
  },
}
