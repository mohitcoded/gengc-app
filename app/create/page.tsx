'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Image, Video, Users, FileText } from 'lucide-react'
import BottomNav from '@/components/BottomNav'
import Navbar from '@/components/Navbar'
import toast from 'react-hot-toast'

export default function CreatePage() {
  const [activeTab, setActiveTab] = useState<'post' | 'gc'>('post')

  return (
    <div className="min-h-screen bg-gradient-dark pb-24">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-black gradient-text mb-2">Create</h1>
          <p className="text-white/60">Share your vibe or build a community</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('post')}
            className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all ${
              activeTab === 'post'
                ? 'bg-gradient-gengc text-white'
                : 'bg-white/5 text-white/60 hover:bg-white/10'
            }`}
          >
            Create Post
          </button>
          <button
            onClick={() => setActiveTab('gc')}
            className={`flex-1 py-3 px-6 rounded-xl font-bold transition-all ${
              activeTab === 'gc'
                ? 'bg-gradient-gengc text-white'
                : 'bg-white/5 text-white/60 hover:bg-white/10'
            }`}
          >
            Create GC
          </button>
        </div>

        {/* Create Post */}
        {activeTab === 'post' && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card-gengc"
          >
            <h2 className="text-2xl font-bold mb-6">New Post</h2>
            
            <textarea
              className="input-gengc w-full min-h-[200px] mb-4 resize-none"
              placeholder="What's on your mind? Share your vibe..."
            />

            <div className="flex gap-4 mb-6">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                <Image className="w-5 h-5 text-gengc-purple" />
                <span className="text-sm font-semibold">Photo</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                <Video className="w-5 h-5 text-gengc-pink" />
                <span className="text-sm font-semibold">Video</span>
              </button>
            </div>

            <button
              onClick={() => toast.success('Post created! 🎉')}
              className="btn-primary w-full"
            >
              Post
            </button>
          </motion.div>
        )}

        {/* Create GC */}
        {activeTab === 'gc' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card-gengc"
          >
            <h2 className="text-2xl font-bold mb-6">New Group Chat</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">GC Name</label>
                <input
                  type="text"
                  className="input-gengc w-full"
                  placeholder="e.g., Crypto Degens"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Description</label>
                <textarea
                  className="input-gengc w-full min-h-[100px] resize-none"
                  placeholder="What's your GC about?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Entry Fee (Royal Coins)</label>
                <input
                  type="number"
                  className="input-gengc w-full"
                  placeholder="0"
                  min="0"
                />
                <p className="text-xs text-white/40 mt-1">Set to 0 for free entry</p>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Theme Color</label>
                <div className="flex gap-3">
                  {['#8B5CF6', '#EC4899', '#06B6D4', '#FBBF24', '#10B981'].map((color) => (
                    <button
                      key={color}
                      className="w-12 h-12 rounded-full border-2 border-white/20 hover:border-white/40 transition-all"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gengc-purple/10 border border-gengc-purple/20 rounded-xl p-4 mb-6">
              <p className="text-sm text-white/80">
                💡 <strong>Pro Tip:</strong> Verify your GC (₹499/month) to unlock monetization and get featured!
              </p>
            </div>

            <button
              onClick={() => toast.success('GC created! 🎉')}
              className="btn-primary w-full"
            >
              Create GC
            </button>
          </motion.div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}