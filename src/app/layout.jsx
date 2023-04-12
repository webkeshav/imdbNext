
import Providers from './Providers'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Searchbox from './components/Searchbox'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Providers>
        <Header />
        <Navbar />
        <Searchbox />
        {children} 
        </Providers>
        </body>
    </html>
  )
}
