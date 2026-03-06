'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  ['/', 'Dashboard'],
  ['/inventory', 'Inventory'],
  ['/purchases', 'Purchases'],
  ['/recipes', 'Recipes'],
  ['/products', 'Products'],
  ['/make', 'Make'],
  ['/sales', 'Sales'],
  ['/calculators', 'Calculators'],
  ['/reports', 'Reports'],
  ['/settings', 'Settings'],
]

export function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="sidebar">
      <div className="brand"><span className="logo">◌</span><span>CraftLab</span></div>
      <nav>
        {links.map(([href, label]) => (
          <Link key={href} href={href} className={`nav-link ${pathname === href ? 'active' : ''}`}>
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}