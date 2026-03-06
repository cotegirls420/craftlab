import { PageHeader } from '@/components/page-header'

export default function Page() {
  return (
    <>
      <section className="hero">
        <PageHeader title="Settings" subtitle="Units, tax defaults, cost settings, and product types." />
      </section>
      <div className="card">
        <table className="page-table">
          <thead><tr><th>Setting</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Preferred Weight Unit</td><td>oz</td></tr>
        <tr><td>Default Tax Rate</td><td>7%</td></tr>
        <tr><td>Costing Method</td><td>Weighted Average</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}