import { PageHeader } from '@/components/page-header'

export default function Page() {
  return (
    <>
      <section className="hero">
        <PageHeader title="Sales" subtitle="Finished stock leaves inventory here." />
      </section>
      <div className="card">
        <table className="page-table">
          <thead><tr><th>Date</th><th>Channel</th><th>Items</th><th>Total</th></tr></thead>
          <tbody>
            <tr><td>2026-03-15</td><td>Farmers Market</td><td>3</td><td>$54.00</td></tr>
        <tr><td>2026-03-14</td><td>Shopify</td><td>2</td><td>$36.00</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}