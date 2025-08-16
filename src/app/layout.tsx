// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { LoadingProvider } from '@/components/loading-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Lahiru Tissera | Full-Stack Software Engineer',
  description: 'Creative Full-Stack Developer specializing in Web3, React, Next.js, and Machine Learning.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased"  data-new-gr-c-s-check-loaded="14.1248.0"
                      data-gr-ext-installed="">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LoadingProvider>
            <div className="relative min-h-screen bg-gradient-to-br from-background to-background/80">
              <Header />
              <main className="relative">
                {children}
              </main>
              <Footer />
              <Toaster />
            </div>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
