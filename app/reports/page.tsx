import { PageHeader } from '@/components/page-header'

export default function Page() {
  return (
    <>
      <section className="hero">
        <PageHeader title="Reports" subtitle="Revenue, profit, inventory value, and ingredient usage." />
      </section>
      <div className="card">
        <table className="page-table">
          <thead><tr><th>Report</th><th>Value</th></tr></thead>
          <tbody>
            <tr><td>Revenue This Month</td><td>$842</td></tr>
        <tr><td>Estimated Profit</td><td>$540</td></tr>
        <tr><td>Inventory Value</td><td>$2,487</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}