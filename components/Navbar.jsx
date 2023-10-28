import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="header">
      <div className="logo">
        <Link href="/">Mirzohid's New App</Link>
      </div>
      <div className="links">
        <Link href="/about">About</Link>
        <Link href="/about/team">Our Team</Link>
        <Link href="/code/repos">Code</Link>
      </div>
    </div>
  );
}

export default Navbar;
