import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string
          display_name: string
          bio: string | null
          avatar_url: string | null
          is_verified: boolean
          subscription_tier: 'free' | 'blue' | 'pro'
          royal_coins: number
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['profiles']['Row'], 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>
      }
      group_chats: {
        Row: {
          id: string
          name: string
          description: string | null
          logo_url: string | null
          theme_color: string
          is_verified: boolean
          entry_fee: number
          owner_id: string
          member_count: number
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['group_chats']['Row'], 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['group_chats']['Insert']>
      }
      gc_members: {
        Row: {
          id: string
          gc_id: string
          user_id: string
          role: 'admin' | 'co-admin' | 'host' | 'curator' | 'member'
          joined_at: string
        }
        Insert: Omit<Database['public']['Tables']['gc_members']['Row'], 'joined_at'>
        Update: Partial<Database['public']['Tables']['gc_members']['Insert']>
      }
      posts: {
        Row: {
          id: string
          user_id: string
          content: string
          media_urls: string[]
          likes_count: number
          comments_count: number
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['posts']['Row'], 'created_at'>
        Update: Partial<Database['public']['Tables']['posts']['Insert']>
      }
      transactions: {
        Row: {
          id: string
          user_id: string
          type: 'purchase' | 'earn' | 'spend' | 'withdraw'
          amount: number
          description: string
          status: 'pending' | 'completed' | 'failed'
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['transactions']['Row'], 'created_at'>
        Update: Partial<Database['public']['Tables']['transactions']['Insert']>
      }
    }
  }
}