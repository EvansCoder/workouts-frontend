import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="text-gray-200">
      <nav className="py-6 flex items-center justify-between">
        <Link href="/">
          <a className="text-3xl font-bold text-white">ActiveTracker</a>
        </Link>
        <ul className="flex space-x-5">
          <li>
            <Link href="/">
              <a className="text-base hover:text-blue-400 font-bold">Exercises</a>
            </Link>
          </li>
          <li>
            <Link href="/exerciseLog">
              <a className="text-base hover:text-blue-400  font-bold">Create Exercise Log</a>
            </Link>
          </li>
          <li>
            <Link href="/addUser">
              <a className="text-base hover:text-white font-bold">Create User</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
