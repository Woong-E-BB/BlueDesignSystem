import type { Meta, StoryObj } from '@storybook/react'
import FigmaEmbedPage from './FigmaEmbedPage'

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

const FIGMA_BUTTONS_URL =
  'https://www.figma.com/design/ec2KdFeSwTGXsQaNySybLO/%EB%B8%94%EB%A3%A8%ED%8C%9C%EC%BD%94%EB%A6%AC%EC%95%84-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=2-9&m=dev'
const FIGMA_INPUT_URL =
  'https://www.figma.com/design/ec2KdFeSwTGXsQaNySybLO/%EB%B8%94%EB%A3%A8%ED%8C%9C%EC%BD%94%EB%A6%AC%EC%95%84-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=3-2&m=dev'
const FIGMA_MODAL_URL =
  'https://www.figma.com/design/ec2KdFeSwTGXsQaNySybLO/%EB%B8%94%EB%A3%A8%ED%8C%9C%EC%BD%94%EB%A6%AC%EC%95%84-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=3-3&m=dev'
const FIGMA_CHECKBOX_URL =
  'https://www.figma.com/design/ec2KdFeSwTGXsQaNySybLO/%EB%B8%94%EB%A3%A8%ED%8C%9C%EC%BD%94%EB%A6%AC%EC%95%84-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=36-74&m=dev'
const FIGMA_RADIOGROUP_URL =
  'https://www.figma.com/design/ec2KdFeSwTGXsQaNySybLO/%EB%B8%94%EB%A3%A8%ED%8C%9C%EC%BD%94%EB%A6%AC%EC%95%84-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=4-481&m=dev'
const FIGMA_PAGINATION_URL =
  'https://www.figma.com/design/ec2KdFeSwTGXsQaNySybLO/%EB%B8%94%EB%A3%A8%ED%8C%9C%EC%BD%94%EB%A6%AC%EC%95%84-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=4-481&m=dev'
const FIGMA_TAB_URL =
  'https://www.figma.com/design/ec2KdFeSwTGXsQaNySybLO/%EB%B8%94%EB%A3%A8%ED%8C%9C%EC%BD%94%EB%A6%AC%EC%95%84-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=3-5&m=dev'
const FIGMA_TOOLTIP_URL =
  'https://www.figma.com/design/ec2KdFeSwTGXsQaNySybLO/%EB%B8%94%EB%A3%A8%ED%8C%9C%EC%BD%94%EB%A6%AC%EC%95%84-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=3-7&m=dev'
const FIGMA_BADGE_TAG_URL =
  'https://www.figma.com/design/ec2KdFeSwTGXsQaNySybLO/%EB%B8%94%EB%A3%A8%ED%8C%9C%EC%BD%94%EB%A6%AC%EC%95%84-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=3-8&m=dev'
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
  render: () => (
    <FigmaEmbedPage
      title="Buttons"
      description="Primary, secondary, and utility button patterns."
      figmaUrl={FIGMA_BUTTONS_URL}
    />
  ),
}

export const Input: Story = {
  name: '2.2 Input',
  render: () => (
    <FigmaEmbedPage
      title="Input"
      description="Text fields, states, and validation rules."
      figmaUrl={FIGMA_INPUT_URL}
    />
  ),
}

export const Modal: Story = {
  name: '2.3 Modal',
  render: () => (
    <FigmaEmbedPage
      title="Modal"
      description="Dialog behaviors, sizes, and accessibility requirements."
      figmaUrl={FIGMA_MODAL_URL}
    />
  ),
}

export const Checkbox: Story = {
  name: '2.4 Checkbox',
  render: () => (
    <FigmaEmbedPage
      title="Checkbox"
      description="Checkbox styles and grouping conventions."
      figmaUrl={FIGMA_CHECKBOX_URL}
    />
  ),
}

export const RadioGroup: Story = {
  name: '2.5 RadioGroup',
  render: () => (
    <FigmaEmbedPage
      title="RadioGroup"
      description="Radio inputs and grouping behaviors."
      figmaUrl={FIGMA_RADIOGROUP_URL}
    />
  ),
}

export const Pagination: Story = {
  name: '2.6 Pagination',
  render: () => (
    <FigmaEmbedPage
      title="Pagination"
      description="Pagination patterns for lists and tables."
      figmaUrl={FIGMA_PAGINATION_URL}
    />
  ),
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
  render: () => (
    <FigmaEmbedPage
      title="Tab"
      description="Tabs layout, states, and responsive rules."
      figmaUrl={FIGMA_TAB_URL}
    />
  ),
}

export const Tooltip: Story = {
  name: '2.9 Tooltip',
  render: () => (
    <FigmaEmbedPage
      title="Tooltip"
      description="Tooltip trigger rules and positioning."
      figmaUrl={FIGMA_TOOLTIP_URL}
    />
  ),
}

export const BadgeAndTag: Story = {
  name: '2.10 Badge & Tag',
  render: () => (
    <FigmaEmbedPage
      title="Badge & Tag"
      description="Badge and tag styles, color usage, and states."
      figmaUrl={FIGMA_BADGE_TAG_URL}
    />
  ),
}

export const Card: Story = {
  name: '2.11 Card',
  args: {
    title: 'Card',
    description: 'Card layout guidance and content rules.',
  },
}
