import Users from '@/components/Users'
import React from 'react'

export const metadata = {
  title: "About Skiva",
}  

function page() {
  return (
    <div>
      <h2>About Skiva</h2>
      <Users />
    </div>
  )
}

export default page