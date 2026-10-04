import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PBOS — Priyanshu Bhatt',
  description: 'A personal desktop workspace for Priyanshu Bhatt.',
  generator: 'v0.app',
  icons: {
    icon: '/pbos-icon.svg',
    apple: '/pbos-icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            #initial-boot-screen {
              position: fixed;
              inset: 0;
              width: 100vw;
              height: 100vh;
              background: #0a0a0a;
              z-index: 9999999;
            }
            .boot-hidden #initial-boot-screen,
            .boot-hidden .react-boot-screen-initial {
              display: none !important;
            }
          `
        }} />
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              if (sessionStorage.getItem('pbos-booted')) {
                document.documentElement.classList.add('boot-hidden');
              }
            } catch (e) {}
          `
        }} />
      </head>
      <body className="antialiased">
        <div id="initial-boot-screen"></div>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
