# GenGc - Next-Generation Social Media Platform

**Your vibe. Your crew. Your empire.**

GenGc is a culture-first social platform built exclusively for Gen Z, merging Instagram's visual storytelling with Discord's community power. Transform group chats into monetizable micro-communities where creators build their digital empires.

## 🚀 Features

- **Instagram-Style Social Layer**: Profiles, posts, stories, reels, and DMs
- **Monetizable Group Chats (GCs)**: Create branded communities with entry fees
- **Royal Coins Economy**: In-app currency for earning and withdrawing real money
- **Verification System**: Blue tick for users, verified badges for GCs
- **Premium Tiers**: GenGc Blue (₹99/mo) and Pro (₹299/mo)
- **Gen-Z Aesthetic**: Bold gradients, smooth animations, modern UI

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Payments**: Razorpay
- **State Management**: Zustand
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/mohitcoded/gengc-app.git
cd gengc-app

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Supabase and Razorpay credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 🗄️ Database Setup

Run these SQL commands in your Supabase SQL editor:

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  username TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL,
  bio TEXT,
  avatar_url TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  subscription_tier TEXT DEFAULT 'free',
  royal_coins INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create group_chats table
CREATE TABLE group_chats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  logo_url TEXT,
  theme_color TEXT DEFAULT '#8B5CF6',
  is_verified BOOLEAN DEFAULT FALSE,
  entry_fee INTEGER DEFAULT 0,
  owner_id UUID REFERENCES profiles(id),
  member_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create gc_members table
CREATE TABLE gc_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  gc_id UUID REFERENCES group_chats(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'member',
  joined_at TIMESTAMP DEFAULT NOW()
);

-- Create posts table
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  media_urls TEXT[],
  likes_count INTEGER DEFAULT 0,
  comments_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create transactions table
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  amount INTEGER NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE group_chats ENABLE ROW LEVEL SECURITY;
ALTER TABLE gc_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- Create policies (basic examples)
CREATE POLICY "Public profiles are viewable by everyone" 
  ON profiles FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" 
  ON profiles FOR UPDATE USING (auth.uid() = id);
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

## 💰 Revenue Model

- **Subscriptions**: Blue Tick (₹99), Pro (₹299), Verified GC (₹499)
- **Royal Coins**: 15-20% margin on transactions
- **GC Entry Fees**: 10% platform cut
- **Premium Features**: Paid themes and customization

## 📈 Roadmap

- [ ] Phase 1: Core features (Auth, Feed, GCs)
- [ ] Phase 2: Royal Coins integration
- [ ] Phase 3: Stories & Reels
- [ ] Phase 4: DMs & Real-time chat
- [ ] Phase 5: Mobile apps (iOS/Android)
- [ ] Phase 6: Advanced analytics
- [ ] Phase 7: Brand partnerships

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a PR.

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🎯 Contact

Built with 💜 by the GenGc team

---

**Ready to build your empire? Join GenGc today! 🚀**