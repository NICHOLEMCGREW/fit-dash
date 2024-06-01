import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Header({ openSidebar }) {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <BsJustify className="text-2xl cursor-pointer mr-4" onClick={openSidebar} />
        <span className="text-2xl font-bold">Track-it</span>
      </div>
      <div className="flex items-center">
        <BsSearch className="text-2xl mr-4 cursor-pointer" />
        <BsFillBellFill className="text-2xl mr-4 cursor-pointer" />
        <BsFillEnvelopeFill className="text-2xl mr-4 cursor-pointer" />
        <BsPersonCircle className="text-2xl cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
