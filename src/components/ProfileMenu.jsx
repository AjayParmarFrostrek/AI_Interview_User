// ProfileMenu.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiFileText, FiLogOut } from "react-icons/fi";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate();
   const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      {/* Profile button */}
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 focus:outline-none"
      >
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-semibold">
          JD
        </div>
        <span className="hidden md:block font-medium">John Doe</span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-gray-200">
            <p className="text-gray-900 font-medium">John Doe</p>
            <p className="text-gray-500 text-sm">john@example.com</p>
          </div>
          <ul className="py-2">
            <li>
              <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
              onClick={() => {navigate("/profile");
                    setIsOpen(false);}}>
                <FiUser /> Profile
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                onClick={() => {navigate("/my-applications");
                    setIsOpen(false);}}>
             <FiFileText /> My Applications
</button>

            </li>
          </ul>
          <div className="border-t border-gray-200">
            <button className="flex items-center gap-2 w-full px-4 py-2 text-red-500 hover:bg-gray-100">
              <FiLogOut /> Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;