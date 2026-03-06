import { PageHeader } from '@/components/page-header'

const products = [
  { name: 'Cashmere & Cocoa Butter Candle', type: 'Candle', stock: 14, retail: '$18.00' },
  { name: 'Fresh Linen Wax Melt', type: 'Wax Melt', stock: 21, retail: '$6.00' },
  { name: 'Lavender Goat Milk Soap', type: 'Soap', stock: 9, retail: '$8.00' },
]

const purchases = [
  { vendor: 'Candle Science', item: 'MB100 Wax', date: '2026-03-12', total: '$48.83' },
  { vendor: 'FO Vendor', item: 'Cashmere FO', date: '2026-03-10', total: '$39.20' },
]

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <PageHeader title="CraftLab dashboard" subtitle="Real website foundation for craftlabhq.com." />
      </section>

      <section className="cards">
        <div className="card"><div className="stat-label">Products Made This Week</div><div className="stat-value">42</div><div className="muted">Production-first dashboard</div></div>
        <div className="card"><div className="stat-label">Products In Stock</div><div className="stat-value">68</div><div className="muted">Across active products</div></div>
        <div className="card"><div className="stat-label">Sales This Week</div><div className="stat-value">18</div><div className="muted">Shopify + in person</div></div>
        <div className="card"><div className="stat-label">Revenue This Month</div><div className="stat-value">$842</div><div className="muted">Estimated gross</div></div>
      </section>

      <section className="grid">
        <div className="card">
          <h2>Products</h2>
          <div className="list">
            {products.map((p) => (
              <div key={p.name} className="item">
                <strong>{p.name}</strong>
                <span className="muted">{p.type} • Stock: {p.stock} • Retail: {p.retail}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2>Recent purchases</h2>
          <div className="list">
            {purchases.map((p) => (
              <div key={p.vendor + p.item} className="item">
                <strong>{p.vendor}</strong>
                <span className="muted">{p.item} • {p.date} • {p.total}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}