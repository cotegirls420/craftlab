import { PageHeader } from '@/components/page-header'

export default function Page() {
  return (
    <>
      <section className="hero">
        <PageHeader title="Calculators" subtitle="Soap calc, wax/fragrance calc, unit converter, and scaling tools will live here." />
      </section>
      <div className="card">
        <table className="page-table">
          <thead><tr><th>Tool</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>Soap Calculator</td><td>Planned</td></tr>
        <tr><td>Wax / Fragrance Calculator</td><td>Planned</td></tr>
        <tr><td>Unit Converter</td><td>Planned</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}