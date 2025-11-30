'use client'

import { Home, Users, PlusCircle, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: 'Home', href: '/feed' },
    { icon: Users, label: 'GCs', href: '/gcs' },
    { icon: PlusCircle, label: 'Create', href: '/create' },
    { icon: User, label: 'Profile', href: '/profile' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gengc-dark/80 backdrop-blur-lg border-t border-white/10 pb-safe">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          
          return (
            <Link key={item.href} href={item.href}>
              <button
                className={`flex flex-col items-center gap-1 transition-colors ${
                  isActive ? 'text-gengc-purple' : 'text-white/60 hover:text-white/80'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-semibold">{item.label}</span>
              </button>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}