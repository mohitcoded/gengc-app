'use client'

import Link from 'next/link'
import { useUserStore } from '@/lib/store'
import { Coins, LogOut, Menu } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function Navbar() {
  const { user, setUser } = useUserStore()
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    toast.success('Logged out successfully')
    router.push('/')
  }

  return (
    <nav className="sticky top-0 z-50 bg-gengc-dark/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={user ? '/feed' : '/'}>
          <h1 className="text-2xl font-black gradient-text cursor-pointer">GenGc</h1>
        </Link>
        
        {user && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
              <Coins className="w-5 h-5 text-gengc-yellow" />
              <span className="font-bold">{user.royal_coins}</span>
            </div>
            
            <button
              onClick={handleLogout}
              className="btn-secondary py-2 px-4 text-sm flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}