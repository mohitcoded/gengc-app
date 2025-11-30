'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import { useUserStore } from '@/lib/store'
import { useRouter } from 'next/navigation'
import { Home, Users, PlusCircle, Coins, User, LogOut } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Feed() {
  const router = useRouter()
  const { user, setUser } = useUserStore()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    try {
      const { data: { user: authUser } } = await supabase.auth.getUser()
      
      if (!authUser) {
        router.push('/auth/login')
        return
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', authUser.id)
        .single()

      if (profile) {
        setUser(profile)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    toast.success('Logged out successfully')
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center">
        <div className="text-2xl gradient-text font-bold">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-gengc-dark/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-black gradient-text">GenGc</h1>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
              <Coins className="w-5 h-5 text-gengc-yellow" />
              <span className="font-bold">{user?.royal_coins || 0}</span>
            </div>
            
            <button
              onClick={handleLogout}
              className="btn-secondary py-2 px-4 text-sm"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-black mb-4">
            Welcome back, <span className="gradient-text">{user?.display_name}</span>! 👋
          </h2>
          <p className="text-xl text-white/60">Your feed is looking fresh</p>
        </motion.div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card-gengc cursor-pointer"
          >
            <PlusCircle className="w-12 h-12 text-gengc-purple mb-4" />
            <h3 className="text-xl font-bold mb-2">Create Post</h3>
            <p className="text-white/60">Share your vibe with the world</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card-gengc cursor-pointer"
          >
            <Users className="w-12 h-12 text-gengc-pink mb-4" />
            <h3 className="text-xl font-bold mb-2">Create GC</h3>
            <p className="text-white/60">Build your own community</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card-gengc cursor-pointer"
          >
            <Coins className="w-12 h-12 text-gengc-yellow mb-4" />
            <h3 className="text-xl font-bold mb-2">Buy Coins</h3>
            <p className="text-white/60">Power up your account</p>
          </motion.div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Latest Posts</h3>
          
          <div className="card-gengc text-center py-12">
            <p className="text-white/60 text-lg">No posts yet. Be the first to share! 🚀</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gengc-dark/80 backdrop-blur-lg border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-around">
          <button className="flex flex-col items-center gap-1 text-gengc-purple">
            <Home className="w-6 h-6" />
            <span className="text-xs font-semibold">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/60">
            <Users className="w-6 h-6" />
            <span className="text-xs font-semibold">GCs</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/60">
            <PlusCircle className="w-6 h-6" />
            <span className="text-xs font-semibold">Create</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/60">
            <User className="w-6 h-6" />
            <span className="text-xs font-semibold">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  )
}