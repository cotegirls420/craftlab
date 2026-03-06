import './globals.css'
import { Sidebar } from '@/components/sidebar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CraftLab',
  description: 'CraftLab web app foundation'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <Sidebar />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  )
}