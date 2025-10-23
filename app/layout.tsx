import type { Metadata } from 'next'
import { Inter, Noto_Serif_JP } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSerifJP = Noto_Serif_JP({ 
  subsets: ['latin'],
  variable: '--font-noto-serif-jp',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Javier Muhammad Athallah | Software Engineer Portfolio',
  description: 'Professional portfolio of Javier Muhammad Athallah - Computer Science Software Engineering student at BINUS University, Jakarta. Specializing in Software Engineering, Frontend Development, AI, Machine Learning, and UI/UX Design.',
  keywords: ['Javier Muhammad Athallah', 'Software Engineer', 'BINUS University', 'Portfolio', 'Frontend Developer', 'AI', 'Machine Learning', 'React', 'Next.js'],
  authors: [{ name: 'Javier Muhammad Athallah' }],
  icons: {
    icon: [
      { url: '/logo-jv.jpg', type: 'image/jpeg' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/logo-jv.jpg',
    apple: '/logo-jv.jpg',
  },
  openGraph: {
    title: 'Javier Muhammad Athallah | Software Engineer Portfolio',
    description: 'Professional portfolio with sakura theme - Computer Science student passionate about creating innovative technology solutions',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/logo-jv.jpg',
        width: 1200,
        height: 630,
        alt: 'Javier Muhammad Athallah Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Javier Muhammad Athallah | Software Engineer',
    description: 'Professional portfolio with sakura theme',
    images: ['/logo-jv.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerifJP.variable}`} suppressHydrationWarning>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
