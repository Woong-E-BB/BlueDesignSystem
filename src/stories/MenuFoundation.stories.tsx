import { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import colorTokens from '../tokens/figma/colors.json'
import FigmaEmbedPage from './FigmaEmbedPage'

type TokenValue = {
  value: string
  type?: string
  description?: string
}

type TokenGroup = {
  [key: string]: TokenGroup | TokenValue
}

type FlattenedToken = {
  name: string
  value: string
  description?: string
  variable: string
  token: string
}

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
  'https://www.figma.com/design/ec2KdFeSwTGXsQaNySybLO/%EB%B8%94%EB%A3%A8%ED%8C%9C%EC%BD%94%EB%A6%AC%EC%95%84-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C'

const figmaUrl = (nodeId: string) => `${FIGMA_BASE_URL}?node-id=${nodeId}&m=dev`

const FIGMA_COLOR_STYLE_URL = figmaUrl('2-4')
const FIGMA_COLOR_LAYER_1_URL = figmaUrl('13-184')
const FIGMA_COLOR_LAYER_2_URL = figmaUrl('265-936')
const FIGMA_TYPOGRAPHY_URL = figmaUrl('2-5')
const FIGMA_TYPOGRAPHY_LAYER_1_URL = figmaUrl('86-364')
const FIGMA_GRID_URL = figmaUrl('2-6')
const FIGMA_GRID_LAYER_1_URL = figmaUrl('16-251')
const FIGMA_GRID_LAYER_2_URL = figmaUrl('16-714')
const FIGMA_ICON_URL = figmaUrl('2-7')
const FIGMA_ICON_LAYER_1_URL = figmaUrl('556-2392')
const FIGMA_RADIUS_URL = figmaUrl('3-9')
const FIGMA_RADIUS_LAYER_1_URL = figmaUrl('108-83')

const isTokenValue = (value: TokenGroup | TokenValue): value is TokenValue =>
  typeof value === 'object' && value !== null && 'value' in value

const toCssVariable = (name: string) =>
  `--color-${name.replace(/\./g, '-').toLowerCase()}`

const flattenTokens = (
  node: TokenGroup,
  path: string[] = []
): FlattenedToken[] =>
  Object.entries(node).flatMap(([key, value]) => {
    if (isTokenValue(value)) {
      const tokenName = [...path, key].join('.')
      return [
        {
          name: tokenName,
          value: value.value,
          description: value.description,
          variable: toCssVariable(tokenName),
          token: tokenName,
        },
      ]
    }

    return flattenTokens(value, [...path, key])
  })

const colorTokenRoot = (
  (colorTokens as TokenGroup).color ?? (colorTokens as TokenGroup)
) as TokenGroup

const flattenedColorTokens = flattenTokens(colorTokenRoot)

type FigmaFrame = {
  title: string
  url: string
}

type ColorTokensPageProps = {
  title: string
  description?: string
  figmaUrl: string
  tokens: FlattenedToken[]
  figmaFrames?: FigmaFrame[]
}

type ExportTab = 'json' | 'css' | 'ts'

const buildJsonExport = (tokens: FlattenedToken[]) =>
  JSON.stringify(
    tokens.map((token) => ({
      name: token.name,
      variable: token.variable,
      token: token.token,
      value: token.value,
      description: token.description ?? '',
    })),
    null,
    2
  )

const buildCssExport = (tokens: FlattenedToken[]) =>
  [
    ':root {',
    ...tokens.map((token) => `  ${token.variable}: ${token.value};`),
    '}',
  ].join('\n')

const buildTsExport = (tokens: FlattenedToken[]) =>
  [
    'export const colorTokens = {',
    ...tokens.map(
      (token) =>
        `  '${token.token}': { name: '${token.name}', variable: '${token.variable}', value: '${token.value}' },`
    ),
    '} as const',
  ].join('\n')

const ColorTokensPage = ({
  title,
  description,
  figmaUrl,
  tokens,
  figmaFrames = [],
}: ColorTokensPageProps) => {
  const [query, setQuery] = useState('')
  const [exportTab, setExportTab] = useState<ExportTab>('json')
  const resolvedFrames =
    figmaFrames.length > 0 ? figmaFrames : [{ title: 'Main frame', url: figmaUrl }]
  const exportContent =
    exportTab === 'json'
      ? buildJsonExport(tokens)
      : exportTab === 'css'
      ? buildCssExport(tokens)
      : buildTsExport(tokens)

  const filteredTokens = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) {
      return tokens
    }
    return tokens.filter((token) =>
      [
        token.name,
        token.value,
        token.variable,
        token.token,
        token.description ?? '',
      ]
        .join(' ')
        .toLowerCase()
        .includes(normalized)
    )
  }, [query, tokens])

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 16 }}>
        <h3 style={{ margin: '0 0 4px', fontSize: 18 }}>{title}</h3>
        <p style={{ margin: 0, color: '#4b5563' }}>
          {description ??
            'Figma color styles are mapped to Storybook tokens with per-chip metadata.'}
        </p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 1.1fr) minmax(360px, 1.4fr)',
          gap: 16,
          alignItems: 'start',
        }}
      >
        <div style={{ display: 'grid', gap: 12 }}>
          {resolvedFrames.map((frame) => (
            <div
              key={frame.title}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                overflow: 'hidden',
                background: '#f8fafc',
              }}
            >
              <div
                style={{
                  padding: 12,
                  borderBottom: '1px solid #e2e8f0',
                  background: '#ffffff',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 12,
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 600 }}>
                  {frame.title}
                </div>
                <a
                  href={frame.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: 12, color: '#2563eb' }}
                >
                  Open in Figma
                </a>
              </div>
              <div style={{ position: 'relative', paddingTop: '64%' }}>
                <iframe
                  title={`Figma ${title} ${frame.title}`}
                  src={`https://www.figma.com/embed?embed_host=storybook&url=${encodeURIComponent(
                    frame.url
                  )}`}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              marginBottom: 12,
            }}
          >
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name, token, variable, value..."
              style={{
                flex: 1,
                border: '1px solid #e2e8f0',
                borderRadius: 10,
                padding: '8px 12px',
                fontSize: 12,
              }}
            />
            <div style={{ fontSize: 12, color: '#64748b' }}>
              {filteredTokens.length} tokens
            </div>
          </div>
          <div
            style={{
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              padding: 12,
              background: '#ffffff',
              marginBottom: 12,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8 }}>
              Exports
            </div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
              {(['json', 'css', 'ts'] as ExportTab[]).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setExportTab(tab)}
                  style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: 8,
                    padding: '4px 8px',
                    fontSize: 12,
                    background: exportTab === tab ? '#e2e8f0' : '#ffffff',
                    cursor: 'pointer',
                  }}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
            <textarea
              readOnly
              value={exportContent}
              style={{
                width: '100%',
                minHeight: 140,
                fontSize: 11,
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                border: '1px solid #e2e8f0',
                borderRadius: 8,
                padding: 8,
                background: '#f8fafc',
              }}
            />
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 12,
            }}
          >
            {filteredTokens.map((token) => (
              <div
                key={token.name}
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: 12,
                  padding: 12,
                  background: '#ffffff',
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 10,
                    background: token.value,
                    border: '1px solid #e2e8f0',
                    marginBottom: 10,
                  }}
                />
                <div style={{ fontSize: 12, fontWeight: 700 }}>
                  {token.name}
                </div>
                <div style={{ fontSize: 12, color: '#475569' }}>
                  {token.value}
                </div>
                <div style={{ fontSize: 11, color: '#64748b', marginTop: 6 }}>
                  <div>Name: {token.name}</div>
                  <div>Variable: {token.variable}</div>
                  <div>Token: {token.token}</div>
                </div>
                {token.description && (
                  <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 6 }}>
                    {token.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

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
  render: () => (
    <ColorTokensPage
      title="Colors"
      figmaUrl={FIGMA_COLOR_STYLE_URL}
      tokens={flattenedColorTokens}
      figmaFrames={[
        { title: 'layers1', url: FIGMA_COLOR_LAYER_1_URL },
        { title: 'layers2', url: FIGMA_COLOR_LAYER_2_URL },
      ]}
    />
  ),
}

export const Typography: Story = {
  name: '1.2 Typography',
  render: () => (
    <FigmaEmbedPage
      title="Typography"
      description="Type scale, font stacks, and text styles."
      figmaUrl={FIGMA_TYPOGRAPHY_URL}
      figmaFrames={[{ title: 'layers1', url: FIGMA_TYPOGRAPHY_LAYER_1_URL }]}
    />
  ),
}

export const Grid: Story = {
  name: '1.3 Grid',
  render: () => (
    <FigmaEmbedPage
      title="Grid"
      description="Layout grid rules and responsive breakpoints."
      figmaUrl={FIGMA_GRID_URL}
      figmaFrames={[
        { title: 'layers1', url: FIGMA_GRID_LAYER_1_URL },
        { title: 'layers2', url: FIGMA_GRID_LAYER_2_URL },
      ]}
    />
  ),
}

export const Icon: Story = {
  name: '1.4 Icon',
  render: () => (
    <FigmaEmbedPage
      title="Icon"
      description="Icon library usage and sizing rules."
      figmaUrl={FIGMA_ICON_URL}
      figmaFrames={[{ title: 'layers1', url: FIGMA_ICON_LAYER_1_URL }]}
    />
  ),
}

export const Radius: Story = {
  name: '1.5 Radius',
  render: () => (
    <FigmaEmbedPage
      title="Radius"
      description="Corner radius scale and application examples."
      figmaUrl={FIGMA_RADIUS_URL}
      figmaFrames={[{ title: 'layers1', url: FIGMA_RADIUS_LAYER_1_URL }]}
    />
  ),
}

export const Shadow: Story = {
  name: '1.6 Shadow',
  args: {
    title: 'Shadow',
    description: 'Elevation system and shadow tokens.',
  },
}
