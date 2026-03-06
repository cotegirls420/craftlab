import { PageHeader } from '@/components/page-header'

export default function Page() {
  return (
    <>
      <section className="hero">
        <PageHeader title="Purchases" subtitle="Incoming materials and supply orders." />
      </section>
      <div className="card">
        <table className="page-table">
          <thead><tr><th>Date</th><th>Vendor</th><th>Item</th><th>Total</th></tr></thead>
          <tbody>
            <tr><td>2026-03-12</td><td>Candle Science</td><td>MB100 Wax</td><td>$48.83</td></tr>
        <tr><td>2026-03-10</td><td>FO Vendor</td><td>Cashmere FO</td><td>$39.20</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}