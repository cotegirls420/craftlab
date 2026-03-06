import { PageHeader } from '@/components/page-header'

export default function Page() {
  return (
    <>
      <section className="hero">
        <PageHeader title="Products" subtitle="Separate products, not scent variants under one parent." />
      </section>
      <div className="card">
        <table className="page-table">
          <thead><tr><th>Product</th><th>Type</th><th>Stock</th><th>Cost</th><th>Retail</th></tr></thead>
          <tbody>
            <tr><td>Cashmere & Cocoa Butter Candle</td><td>Candle</td><td>14</td><td>$4.54</td><td>$18.00</td></tr>
        <tr><td>Fresh Linen Wax Melt</td><td>Wax Melt</td><td>21</td><td>$2.18</td><td>$6.00</td></tr>
        <tr><td>Lavender Goat Milk Soap</td><td>Soap</td><td>9</td><td>$2.41</td><td>$8.00</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}