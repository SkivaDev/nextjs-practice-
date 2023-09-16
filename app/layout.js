import Navbar from "../components/Navbar"

export const metadata = {
  title: 'Mi tiendita con Next.js - HomePage',
  description: 'Esta es la pagina de inicio de mi tiendita con Next.js',
  keywords: 'tienda, next.js, ecommerce, react, javascript',
  
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Navbar/>
        
        {children}
      </body>
    </html>
  )
}
