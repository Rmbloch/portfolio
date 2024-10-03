import Header from './components/Header'
import Contact from './components/Contact'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ryan Bloch',
  description: 'Student, Software Engineer, and Full-Stack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="relative z-10">
          {children}
          <footer className="text-center py-4 bg-white bg-opacity-50">
            <Contact />
            <p>&copy; 2024 Ryan Bloch</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
