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
  title: '2. Components',
  component: SectionPage,
  parameters: {
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof SectionPage>

export const Buttons: Story = {
  name: '2.1 Buttons',
  args: {
    title: 'Buttons',
    description: 'Primary, secondary, and utility button patterns.',
  },
}

export const Input: Story = {
  name: '2.2 Input',
  args: {
    title: 'Input',
    description: 'Text fields, states, and validation rules.',
  },
}

export const Modal: Story = {
  name: '2.3 Modal',
  args: {
    title: 'Modal',
    description: 'Dialog behaviors, sizes, and accessibility requirements.',
  },
}

export const Checkbox: Story = {
  name: '2.4 Checkbox',
  args: {
    title: 'Checkbox',
    description: 'Checkbox styles and grouping conventions.',
  },
}

export const RadioGroup: Story = {
  name: '2.5 RadioGroup',
  args: {
    title: 'RadioGroup',
    description: 'Radio inputs and grouping behaviors.',
  },
}

export const Pagination: Story = {
  name: '2.6 Pagination',
  args: {
    title: 'Pagination',
    description: 'Pagination patterns for lists and tables.',
  },
}

export const Navigation: Story = {
  name: '2.7 Navigation',
  args: {
    title: 'Navigation',
    description: 'Navigation systems, menus, and breadcrumb usage.',
  },
}

export const Tab: Story = {
  name: '2.8 Tab',
  args: {
    title: 'Tab',
    description: 'Tabs layout, states, and responsive rules.',
  },
}

export const Tooltip: Story = {
  name: '2.9 Tooltip',
  args: {
    title: 'Tooltip',
    description: 'Tooltip trigger rules and positioning.',
  },
}

export const BadgeAndTag: Story = {
  name: '2.10 Badge & Tag',
  args: {
    title: 'Badge & Tag',
    description: 'Badge and tag styles, color usage, and states.',
  },
}

export const Card: Story = {
  name: '2.11 Card',
  args: {
    title: 'Card',
    description: 'Card layout guidance and content rules.',
  },
}
