import { PageHeader } from '@/components/page-header'

export default function Page() {
  return (
    <>
      <section className="hero">
        <PageHeader title="Recipes" subtitle="Base formulas stay separate from products." />
      </section>
      <div className="card">
        <table className="page-table">
          <thead><tr><th>Recipe</th><th>Type</th><th>Version</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>8 oz Candle Base</td><td>Candle</td><td>v4</td><td>Approved</td></tr>
        <tr><td>Goat Milk Soap Base</td><td>Soap</td><td>v2</td><td>Approved</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}