'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { Sparkles } from 'lucide-react'

export default function SignUp() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    displayName: '',
  })

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Sign up with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })

      if (authError) throw authError

      if (authData.user) {
        // Create profile
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: authData.user.id,
            username: formData.username,
            display_name: formData.displayName,
            bio: null,
            avatar_url: null,
            is_verified: false,
            subscription_tier: 'free',
            royal_coins: 100, // Welcome bonus!
          })

        if (profileError) throw profileError

        toast.success('Welcome to GenGc! 🎉 You got 100 Royal Coins!')
        router.push('/feed')
      }
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="card-gengc">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black gradient-text mb-2">Join GenGc</h1>
            <p className="text-white/60">Start building your empire</p>
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Username</label>
              <input
                type="text"
                className="input-gengc w-full"
                placeholder="@yourhandle"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Display Name</label>
              <input
                type="text"
                className="input-gengc w-full"
                placeholder="Your Name"
                value={formData.displayName}
                onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                className="input-gengc w-full"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                className="input-gengc w-full"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                minLength={6}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full"
            >
              {loading ? 'Creating Account...' : 'Sign Up 🚀'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/60">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-gengc-purple font-semibold hover:underline">
                Sign In
              </Link>
            </p>
          </div>

          <div className="mt-6 p-4 bg-gengc-purple/10 rounded-xl border border-gengc-purple/20">
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-gengc-purple" />
              <span className="text-white/80">Get 100 Royal Coins as welcome bonus!</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}