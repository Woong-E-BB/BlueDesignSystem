type InfoCard = {
  title: string
  description: string
  linkLabel?: string
  linkUrl?: string
}

type FigmaEmbedPageProps = {
  title: string
  description?: string
  figmaUrl: string
  cards?: InfoCard[]
}

const defaultCards = (figmaUrl: string): InfoCard[] => [
  {
    title: 'Overview',
    description: 'Design guidance and usage details for this section.',
  },
  {
    title: 'Figma Source',
    description: 'Open the full layout and inspect component details.',
    linkLabel: 'Open in Figma',
    linkUrl: figmaUrl,
  },
]

const FigmaEmbedPage = ({
  title,
  description,
  figmaUrl,
  cards = defaultCards(figmaUrl),
}: FigmaEmbedPageProps) => (
  <div style={{ padding: 16 }}>
    <div style={{ marginBottom: 16 }}>
      <h3 style={{ margin: '0 0 4px', fontSize: 18 }}>{title}</h3>
      <p style={{ margin: 0, color: '#4b5563' }}>
        {description ?? 'Figma design guidance is embedded for quick review.'}
      </p>
    </div>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(280px, 1.1fr) minmax(300px, 1fr)',
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
            href={figmaUrl}
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: 12, color: '#2563eb' }}
          >
            Open in Figma
          </a>
        </div>
        <div style={{ position: 'relative', paddingTop: '72%' }}>
          <iframe
            title={`Figma ${title} Layout`}
            src={`https://www.figma.com/embed?embed_host=storybook&url=${encodeURIComponent(
              figmaUrl
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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 12,
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              padding: 12,
              background: '#ffffff',
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700 }}>{card.title}</div>
            <div style={{ fontSize: 12, color: '#475569', marginTop: 6 }}>
              {card.description}
            </div>
            {card.linkLabel && card.linkUrl && (
              <a
                href={card.linkUrl}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: 12, color: '#2563eb', marginTop: 8, display: 'inline-block' }}
              >
                {card.linkLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default FigmaEmbedPage
