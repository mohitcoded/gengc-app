#!/bin/bash

echo "🚀 GenGc Setup Script"
echo "====================="
echo ""

# Check if .env.local exists
if [ -f .env.local ]; then
    echo "✅ .env.local found"
else
    echo "⚠️  .env.local not found. Creating from template..."
    cp .env.example .env.local
    echo "📝 Please edit .env.local with your credentials"
    echo ""
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your Supabase and Razorpay credentials"
echo "2. Run 'npm run dev' to start development server"
echo "3. Visit http://localhost:3000"
echo ""
echo "📚 See SETUP_CREDENTIALS.md for detailed instructions"