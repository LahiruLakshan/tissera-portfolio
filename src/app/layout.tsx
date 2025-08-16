// src/app/layout.tsx - Improved with better fonts and meta
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import '@/lib/fontawesome';
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Lahiru Tissera | Full-Stack Software Engineer',
  description: 'Creative Full-Stack Developer specializing in Web3, React, Next.js, and Machine Learning. Building elegant digital experiences.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'Web3', 'NFT', 'TypeScript', 'Node.js'],
  authors: [{ name: 'Lahiru Tissera' }],
  creator: 'Lahiru Tissera',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lahirulakshan.web.app',
    title: 'Lahiru Tissera | Full-Stack Software Engineer',
    description: 'Creative Full-Stack Developer specializing in Web3, React, Next.js, and Machine Learning.',
    siteName: 'Lahiru Tissera Portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative min-h-screen bg-gradient-to-br from-background to-background/80">
            <Header />
            <main className="relative">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
