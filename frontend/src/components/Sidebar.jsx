import React from "react";
import {
  BsGrid1X2Fill,
  BsFillGearFill,
  BsGraphDown,
} from 'react-icons/bs';
import { GiHealthPotion } from "react-icons/gi";
import { FaWeight } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { GoGoal } from "react-icons/go";
import { IoBody } from "react-icons/io5";

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  return (
    <aside className={`fixed inset-y-0 left-0 transform ${openSidebarToggle ? "translate-x-0" : "-translate-x-full"} transition-transform duration-500 ease-in-out bg-blue-600 text-white w-72`}>
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <GiHealthPotion className="text-3xl mr-2" />
          <span className="text-2xl font-bold">Track-it</span>
        </div>
        <span className="text-2xl cursor-pointer text-red-500" onClick={OpenSidebar}>X</span>
      </div>

      <ul className="mt-4 text-lg">
        <li className="px-4 py-3 hover:bg-blue-500 cursor-pointer">
          <a href="#" className="flex items-center">
            <BsGrid1X2Fill className="text-2xl mr-2" /> Dashboard
          </a>
        </li>
        <li className="px-4 py-3 hover:bg-blue-500 cursor-pointer">
          <a href="#" className="flex items-center">
            <GoGoal className="text-2xl mr-2" /> Goals
          </a>
        </li>
        <li className="px-4 py-3 hover:bg-blue-500 cursor-pointer">
          <a href="#" className="flex items-center">
            <FaWeight className="text-2xl mr-2" /> Weight
          </a>
        </li>
        <li className="px-4 py-3 hover:bg-blue-500 cursor-pointer">
          <a href="#" className="flex items-center">
            <IoBody className="text-2xl mr-2" /> BMI
          </a>
        </li>
        <li className="px-4 py-3 hover:bg-blue-500 cursor-pointer">
          <a href="#" className="flex items-center">
            <TbRulerMeasure className="text-2xl mr-2" /> Measurements
          </a>
        </li>
        <li className="px-4 py-3 hover:bg-blue-500 cursor-pointer">
          <a href="#" className="flex items-center">
            <BsGraphDown className="text-2xl mr-2" /> Reports
          </a>
        </li>
        <li className="px-4 py-3 hover:bg-blue-500 cursor-pointer">
          <a href="#" className="flex items-center">
            <BsFillGearFill className="text-2xl mr-2" /> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
