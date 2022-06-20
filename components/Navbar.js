import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="text-gray-200">
      <nav className="py-6 flex items-center justify-between">
        <Link href="/">
          <a className="text-3xl font-bold text-white">ActiveTracker</a>
        </Link>
        <ul className={`absolute top-20 w-screen transition-all h-halfscreen pb-5 bg-gray-800 ${isOpen==true? "left-0 w-screen space-y-5 pt-10 flex flex-col items-center justify-center":"left-offscreen w-0" }  md:flex space-x-5`}>
          <li>
            <Link href="/">
              <a className="text-base hover:text-blue-400 font-bold" onClick={()=>setIsOpen(false)}>Exercises</a>
            </Link>
          </li>
          <li>
            <Link href="/exerciseLog">
              <a className="text-base hover:text-blue-400  font-bold" onClick={()=>setIsOpen(false)}>Create Exercise Log</a>
            </Link>
          </li>
          <li>
            <Link href="/addUser">
              <a className="text-base hover:text-white font-bold"onClick={()=>setIsOpen(false)}>Create User</a>
            </Link>
          </li>
        </ul>
        <button onClick={toggle} className="">
        {isOpen?<AiOutlineClose size={30} className="bg-gray-700 rounded"/>:<AiOutlineMenu size={30} className="bg-gray-700 rounded"/>}
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
