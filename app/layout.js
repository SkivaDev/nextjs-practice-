import Navbar from "../components/Navbar"
import { Roboto } from 'next/font/google'


export const metadata = {
  title: 'Mi tiendita con Next.js - HomePage',
  description: 'Esta es la pagina de inicio de mi tiendita con Next.js',
  keywords: 'tienda, next.js, ecommerce, react, javascript',

}
 
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        
        {children}
      </body>
    </html>
  )
}
