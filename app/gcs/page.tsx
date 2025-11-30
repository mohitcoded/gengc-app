'use client'

import { motion } from 'framer-motion'
import { Users, Crown, TrendingUp, Plus } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import Navbar from '@/components/Navbar'

export default function GCsPage() {
  return (
    <div className="min-h-screen bg-gradient-dark pb-24">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-black gradient-text mb-2">Group Chats</h1>
          <p className="text-white/60">Discover and join exclusive communities</p>
        </motion.div>

        {/* Create GC Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary w-full mb-8 flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Create Your Own GC
        </motion.button>

        {/* Trending GCs */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-gengc-pink" />
            Trending GCs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingGCs.map((gc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card-gengc cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-gengc flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold flex items-center gap-2">
                        {gc.name}
                        {gc.verified && <Crown className="w-4 h-4 text-gengc-yellow" />}
                      </h3>
                      <p className="text-sm text-white/60">{gc.members} members</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-white/70 text-sm mb-4">{gc.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gengc-yellow font-bold">
                    {gc.entryFee === 0 ? 'Free' : `${gc.entryFee} coins`}
                  </span>
                  <button className="btn-secondary py-2 px-4 text-sm">
                    Join
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Your GCs */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Your GCs</h2>
          <div className="card-gengc text-center py-12">
            <Users className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <p className="text-white/60">You haven't joined any GCs yet</p>
            <p className="text-white/40 text-sm mt-2">Start exploring and join communities!</p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

const trendingGCs = [
  {
    name: 'Crypto Degens',
    members: 1247,
    description: 'Daily alpha, market analysis, and degen plays. No financial advice tho 👀',
    entryFee: 50,
    verified: true,
  },
  {
    name: 'Fashion Vibes',
    members: 892,
    description: 'Streetwear drops, outfit inspo, and thrift finds. Drip or drown 💧',
    entryFee: 0,
    verified: true,
  },
  {
    name: 'Startup Grind',
    members: 634,
    description: 'Building in public, founder stories, and startup resources. Let\'s build! 🚀',
    entryFee: 100,
    verified: true,
  },
  {
    name: 'Music Producers',
    members: 521,
    description: 'Beat making, production tips, and collab opportunities. Drop your tracks 🎵',
    entryFee: 25,
    verified: false,
  },
  {
    name: 'Fitness Squad',
    members: 789,
    description: 'Workout routines, nutrition tips, and accountability partners. Get fit! 💪',
    entryFee: 0,
    verified: false,
  },
  {
    name: 'Gaming Legends',
    members: 1523,
    description: 'Competitive gaming, tournaments, and squad up. GG EZ 🎮',
    entryFee: 30,
    verified: true,
  },
]