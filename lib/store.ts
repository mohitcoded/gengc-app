import { create } from 'zustand'

interface User {
  id: string
  username: string
  display_name: string
  bio: string | null
  avatar_url: string | null
  is_verified: boolean
  subscription_tier: 'free' | 'blue' | 'pro'
  royal_coins: number
}

interface UserStore {
  user: User | null
  setUser: (user: User | null) => void
  updateCoins: (amount: number) => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  updateCoins: (amount) => set((state) => ({
    user: state.user ? { ...state.user, royal_coins: state.user.royal_coins + amount } : null
  })),
}))