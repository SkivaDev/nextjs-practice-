import React from 'react'
import Link from 'next/link'

function TiendaLayout({ children }) {
  return (
    <>
      <h3>Seccion Tienda</h3>

      <nav>
        <ul>
          <li>
            <Link href="/tienda">Tienda</Link>
          </li>
          <li>
            <Link href="/tienda/productos">Productos</Link>
          </li>
          <li>
            <Link href="/tienda/categorias">Categorias</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  )
}

export default TiendaLayout