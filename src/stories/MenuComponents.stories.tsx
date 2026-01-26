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

const FIGMA_BASE_URL =
  'https://www.figma.com/design/ec2KdFeSwTGXsQaNySybLO/블루팜코리아-디자인시스템'

const figmaUrl = (nodeId: string) => `${FIGMA_BASE_URL}?node-id=${nodeId}&m=dev`

const FIGMA_BUTTONS_URL = figmaUrl('2-9')
const FIGMA_BUTTONS_LAYER_1_URL = figmaUrl('245-2274')
const FIGMA_BUTTONS_LAYER_2_URL = figmaUrl('247-2855')
const FIGMA_BUTTONS_LAYER_3_URL = figmaUrl('252-738')
const FIGMA_BUTTONS_LAYER_4_URL = figmaUrl('252-801')
const FIGMA_INPUT_URL = figmaUrl('3-2')
const FIGMA_INPUT_LAYER_1_URL = figmaUrl('140-456')
const FIGMA_MODAL_URL = figmaUrl('3-3')
const FIGMA_MODAL_LAYER_1_URL = figmaUrl('516-2156')
const FIGMA_MODAL_LAYER_2_URL = figmaUrl('516-1885')
const FIGMA_MODAL_LAYER_3_URL = figmaUrl('516-1562')
const FIGMA_CHECKBOX_URL = figmaUrl('36-74')
const FIGMA_CHECKBOX_LAYER_1_URL = figmaUrl('147-297')
const FIGMA_RADIOGROUP_URL = figmaUrl('4-481')
const FIGMA_RADIOGROUP_LAYER_1_URL = figmaUrl('480-819')
const FIGMA_PAGINATION_URL = figmaUrl('4-481')
const FIGMA_PAGINATION_LAYER_1_URL = figmaUrl('512-2095')
const FIGMA_TAB_URL = figmaUrl('3-5')
const FIGMA_TAB_LAYER_1_URL = figmaUrl('589-3315')
const FIGMA_TAB_LAYER_2_URL = figmaUrl('623-606')
const FIGMA_TOOLTIP_URL = figmaUrl('3-7')
const FIGMA_TOOLTIP_LAYER_1_URL = figmaUrl('382-1395')
const FIGMA_TOOLTIP_LAYER_2_URL = figmaUrl('382-3104')
const FIGMA_BADGE_TAG_URL = figmaUrl('3-8')
const FIGMA_BADGE_TAG_LAYER_1_URL = figmaUrl('407-326')
const FIGMA_BADGE_TAG_LAYER_2_URL = figmaUrl('407-1044')
const FIGMA_BADGE_TAG_LAYER_3_URL = figmaUrl('412-1430')
const FIGMA_BADGE_TAG_LAYER_4_URL = figmaUrl('431-1071')

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
      figmaFrames={[
        { title: 'layers1', url: FIGMA_BUTTONS_LAYER_1_URL },
        { title: 'layers2', url: FIGMA_BUTTONS_LAYER_2_URL },
        { title: 'layers3', url: FIGMA_BUTTONS_LAYER_3_URL },
        { title: 'layers4', url: FIGMA_BUTTONS_LAYER_4_URL },
      ]}
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
      figmaFrames={[{ title: 'layers1', url: FIGMA_INPUT_LAYER_1_URL }]}
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
      figmaFrames={[
        { title: 'layers1', url: FIGMA_MODAL_LAYER_1_URL },
        { title: 'layers2', url: FIGMA_MODAL_LAYER_2_URL },
        { title: 'layers3', url: FIGMA_MODAL_LAYER_3_URL },
      ]}
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
      figmaFrames={[{ title: 'layers1', url: FIGMA_CHECKBOX_LAYER_1_URL }]}
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
      figmaFrames={[{ title: 'layers1', url: FIGMA_RADIOGROUP_LAYER_1_URL }]}
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
      figmaFrames={[{ title: 'layers1', url: FIGMA_PAGINATION_LAYER_1_URL }]}
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
      figmaFrames={[
        { title: 'layers1', url: FIGMA_TAB_LAYER_1_URL },
        { title: 'layers2', url: FIGMA_TAB_LAYER_2_URL },
      ]}
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
      figmaFrames={[
        { title: 'layers1', url: FIGMA_TOOLTIP_LAYER_1_URL },
        { title: 'layers2', url: FIGMA_TOOLTIP_LAYER_2_URL },
      ]}
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
      figmaFrames={[
        { title: 'layers1', url: FIGMA_BADGE_TAG_LAYER_1_URL },
        { title: 'layers2', url: FIGMA_BADGE_TAG_LAYER_2_URL },
        { title: 'layers3', url: FIGMA_BADGE_TAG_LAYER_3_URL },
        { title: 'layers4', url: FIGMA_BADGE_TAG_LAYER_4_URL },
      ]}
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
