
import './globals.css'
import { CartContextProvider } from './(Context)/CartContextProvider'
import Navbar from '@/components/Navbar'



export const metadata = {
  title: 'NextJs Ecommerce App',
  description: 'Dynamic data next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <CartContextProvider>
          <Navbar />
          {children}
        </CartContextProvider>
      </body>
    </html>
  )
}
