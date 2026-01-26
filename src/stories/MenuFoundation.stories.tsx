import { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import colorTokens from '../tokens/figma/colors.json'

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

const FIGMA_COLOR_STYLE_URL =
  'https://www.figma.com/design/ec2KdFeSwTGXsQaNySybLO/%EB%B8%94%EB%A3%A8%ED%8C%9C%EC%BD%94%EB%A6%AC%EC%95%84-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=13-184&m=dev'

const FIGMA_PRIMITIVE_COLOR_URL = FIGMA_COLOR_STYLE_URL
const FIGMA_SEMANTIC_COLOR_URL = FIGMA_COLOR_STYLE_URL

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

const ColorTokensPage = () => {
  const [query, setQuery] = useState('')

  const filteredTokens = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) {
      return flattenedColorTokens
    }
    return flattenedColorTokens.filter((token) =>
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
  }, [query])

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 16 }}>
        <h3 style={{ margin: '0 0 4px', fontSize: 18 }}>Colors</h3>
        <p style={{ margin: 0, color: '#4b5563' }}>
          Figma color styles are mapped to Storybook tokens with per-chip
          metadata.
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
        <div
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
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 600 }}>Figma layout</div>
            <a
              href={FIGMA_COLOR_STYLE_URL}
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: 12, color: '#2563eb' }}
            >
              Open in Figma
            </a>
          </div>
          <div style={{ position: 'relative', paddingTop: '72%' }}>
            <iframe
              title="Figma Color Layout"
              src={`https://www.figma.com/embed?embed_host=storybook&url=${encodeURIComponent(
                FIGMA_COLOR_STYLE_URL
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
  render: () => <ColorTokensPage />,
}

export const PrimitiveColor: Story = {
  name: '1.1.1 Primitive color',
  render: () => (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 12 }}>
        <h3 style={{ margin: '0 0 4px', fontSize: 16 }}>Primitive color</h3>
        <p style={{ margin: 0, color: '#4b5563' }}>
          Figma style guide embedded for primitive colors.
        </p>
      </div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '62.5%',
          borderRadius: 12,
          overflow: 'hidden',
          border: '1px solid #e5e7eb',
          background: '#f8fafc',
        }}
      >
        <iframe
          title="Figma Primitive Color Guide"
          src={`https://www.figma.com/embed?embed_host=storybook&url=${encodeURIComponent(
            FIGMA_PRIMITIVE_COLOR_URL
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
  ),
}

export const SemanticColor: Story = {
  name: '1.1.2 Semantic color',
  render: () => (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 12 }}>
        <h3 style={{ margin: '0 0 4px', fontSize: 16 }}>Semantic color</h3>
        <p style={{ margin: 0, color: '#4b5563' }}>
          Figma style guide embedded for semantic colors.
        </p>
      </div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '62.5%',
          borderRadius: 12,
          overflow: 'hidden',
          border: '1px solid #e5e7eb',
          background: '#f8fafc',
        }}
      >
        <iframe
          title="Figma Semantic Color Guide"
          src={`https://www.figma.com/embed?embed_host=storybook&url=${encodeURIComponent(
            FIGMA_SEMANTIC_COLOR_URL
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
  ),
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
