import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'GenGc - Your Vibe. Your Crew. Your Empire.',
  description: 'Next-generation social media platform for Gen Z with monetizable group chats',
  keywords: ['social media', 'gen z', 'group chats', 'monetization', 'community'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: '#1F1F1F',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)',
            },
          }}
        />
      </body>
    </html>
  )
}