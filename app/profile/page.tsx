'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useUserStore } from '@/lib/store'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { Crown, Coins, Users, Image, Settings, Shield } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import Navbar from '@/components/Navbar'

export default function ProfilePage() {
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

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center">
        <div className="text-2xl gradient-text font-bold">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-dark pb-24">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-gengc mb-8"
        >
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-gengc flex items-center justify-center text-4xl font-black">
              {user.display_name.charAt(0).toUpperCase()}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-3xl font-black">{user.display_name}</h1>
                {user.is_verified && <Crown className="w-6 h-6 text-gengc-yellow" />}
              </div>
              <p className="text-white/60 mb-4">@{user.username}</p>
              
              {user.bio && (
                <p className="text-white/80 mb-4">{user.bio}</p>
              )}
              
              <div className="flex gap-4">
                <button className="btn-secondary py-2 px-4 text-sm flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-gengc"
          >
            <Coins className="w-8 h-8 text-gengc-yellow mb-3" />
            <p className="text-white/60 text-sm mb-1">Royal Coins</p>
            <p className="text-3xl font-black">{user.royal_coins}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-gengc"
          >
            <Users className="w-8 h-8 text-gengc-purple mb-3" />
            <p className="text-white/60 text-sm mb-1">GCs Joined</p>
            <p className="text-3xl font-black">0</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card-gengc"
          >
            <Image className="w-8 h-8 text-gengc-pink mb-3" />
            <p className="text-white/60 text-sm mb-1">Posts</p>
            <p className="text-3xl font-black">0</p>
          </motion.div>
        </div>

        {/* Subscription Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-gengc mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Shield className="w-6 h-6 text-gengc-purple" />
                Subscription Status
              </h3>
              <p className="text-white/60">
                Current Plan: <span className="font-bold text-white capitalize">{user.subscription_tier}</span>
              </p>
            </div>
            
            {user.subscription_tier === 'free' && (
              <button className="btn-primary py-3 px-6">
                Upgrade to Blue
              </button>
            )}
          </div>
        </motion.div>

        {/* Upgrade Options */}
        {user.subscription_tier === 'free' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Upgrade Your Account</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card-gengc border-2 border-gengc-purple"
              >
                <Crown className="w-12 h-12 text-gengc-purple mb-4" />
                <h3 className="text-2xl font-bold mb-2">GenGc Blue</h3>
                <p className="text-3xl font-black mb-4">₹99<span className="text-lg text-white/60">/month</span></p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-gengc-purple" />
                    Blue Tick Verification
                  </li>
                  <li className="flex items-center gap-2 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-gengc-purple" />
                    Priority Support
                  </li>
                  <li className="flex items-center gap-2 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-gengc-purple" />
                    Exclusive Filters
                  </li>
                  <li className="flex items-center gap-2 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-gengc-purple" />
                    Custom Themes
                  </li>
                </ul>
                
                <button className="btn-primary w-full">
                  Get Blue
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card-gengc border-2 border-gengc-pink"
              >
                <Crown className="w-12 h-12 text-gengc-pink mb-4" />
                <h3 className="text-2xl font-bold mb-2">GenGc Pro</h3>
                <p className="text-3xl font-black mb-4">₹299<span className="text-lg text-white/60">/month</span></p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-gengc-pink" />
                    Everything in Blue
                  </li>
                  <li className="flex items-center gap-2 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-gengc-pink" />
                    Unlimited GCs
                  </li>
                  <li className="flex items-center gap-2 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-gengc-pink" />
                    Advanced Analytics
                  </li>
                  <li className="flex items-center gap-2 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-gengc-pink" />
                    Early Features
                  </li>
                </ul>
                
                <button className="btn-primary w-full">
                  Get Pro
                </button>
              </motion.div>
            </div>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}