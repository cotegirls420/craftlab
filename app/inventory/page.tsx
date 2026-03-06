import { PageHeader } from '@/components/page-header'

export default function Page() {
  return (
    <>
      <section className="hero">
        <PageHeader title="Inventory" subtitle="Master inventory for ingredients, fragrance, supplies, and packaging." />
      </section>
      <div className="card">
        <table className="page-table">
          <thead><tr><th>Name</th><th>Group</th><th>Stock</th><th>Low Stock</th><th>Cost</th></tr></thead>
          <tbody>
            <tr><td>MB100 Wax</td><td>Ingredient</td><td>640 oz</td><td>80 oz</td><td>$0.14</td></tr>
        <tr><td>Olive Oil</td><td>Ingredient</td><td>320 oz</td><td>64 oz</td><td>$0.18</td></tr>
        <tr><td>Cashmere FO</td><td>Fragrance</td><td>22 oz</td><td>8 oz</td><td>$2.45</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}