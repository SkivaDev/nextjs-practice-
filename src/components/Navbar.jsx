import React from "react";
import Link from "next/link"

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-[1.875rem] bg-indigo-400">
      <h1 className="text-[2rem]">NextJS APP</h1>
      <ul className="flex gap-3 px-[1.25rem]">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/tienda">Tienda</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
