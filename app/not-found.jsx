import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <section>
      <h1>404</h1>
      <p>Pagina No Econtrada</p>
      <Link href={'/'}>
        Ir al inicio
      </Link>
    </section>
  )
}

export default NotFound