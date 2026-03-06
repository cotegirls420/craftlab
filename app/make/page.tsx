import { PageHeader } from '@/components/page-header'

export default function Page() {
  return (
    <>
      <section className="hero">
        <PageHeader title="Make" subtitle="Production center for batches and test batches." />
      </section>
      <div className="card">
        <table className="page-table">
          <thead><tr><th>Product</th><th>Batch Size</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>Cashmere Candle</td><td>12 units</td><td>Complete</td></tr>
        <tr><td>Lavender Soap</td><td>18 bars</td><td>Curing</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}