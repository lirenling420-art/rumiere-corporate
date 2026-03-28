import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: '株式会社ルミエール | 公式サイト',
  description: '株式会社ルミエールは、美容・サロン、小売・ライフスタイル、交通・物流、人材・業務支援、自動車、環境・建設、文化・教育など、多角的な事業を展開しています。',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="bg-cream text-charcoal">
        <LanguageProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
