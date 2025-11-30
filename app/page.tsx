'use client'

import { motion } from 'framer-motion'
import { Sparkles, Users, Coins, Shield, Zap, Crown } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-dark overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gengc-purple/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gengc-pink/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gengc-cyan/20 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-black mb-6">
              <span className="gradient-text">GenGc</span>
            </h1>
            <p className="text-2xl md:text-4xl font-bold mb-4 text-white/90">
              Your vibe. Your crew. Your empire.
            </p>
            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              The social platform where your group chat becomes your business. 
              Build communities, monetize your vibe, and turn social capital into real capital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/auth/signup">
                <button className="btn-primary text-lg px-8 py-4">
                  Join the Revolution 🚀
                </button>
              </Link>
              <Link href="/auth/login">
                <button className="btn-secondary text-lg px-8 py-4">
                  Sign In
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-5xl font-black text-center mb-16 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why GenGc Slaps Different
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card-gengc"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-4">
                  <feature.icon className="w-12 h-12 text-gengc-purple" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="card-gengc"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to build your empire?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join thousands of Gen-Z creators already monetizing their communities
            </p>
            <Link href="/auth/signup">
              <button className="btn-primary text-xl px-12 py-5">
                Get Started – It's Free
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-white/50">
          <p className="text-sm">
            © 2025 GenGc. Built for Gen Z, by Gen Z. No cap. 💯
          </p>
        </div>
      </footer>
    </main>
  )
}

const features = [
  {
    icon: Users,
    title: 'Monetizable GCs',
    description: 'Turn your group chats into revenue streams. Set entry fees, build exclusive communities, and get paid.',
  },
  {
    icon: Coins,
    title: 'Royal Coins Economy',
    description: 'Earn, spend, and withdraw real money through our in-app currency. Your vibe = your income.',
  },
  {
    icon: Shield,
    title: 'Verified Status',
    description: 'Get that blue tick. Verify your GCs. Unlock premium features and stand out from the crowd.',
  },
  {
    icon: Sparkles,
    title: 'Gen-Z Aesthetic',
    description: 'Bold gradients, smooth animations, and a UI that actually gets you. No boomer vibes here.',
  },
  {
    icon: Zap,
    title: 'Creator Tools',
    description: 'Advanced analytics, custom themes, role management, and everything you need to run your empire.',
  },
  {
    icon: Crown,
    title: 'Premium Tiers',
    description: 'Level up with GenGc Blue or Pro. Get exclusive features, priority support, and flex that status.',
  },
]