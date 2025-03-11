import React, { useState, useEffect, useRef } from "react";
import { FiUser, FiLogOut, FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import "../styles/ProfileDropdown.css"; // Import the CSS file
=======
import "./ProfileDropdown.css"; // Import the CSS file
>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user session
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="profile-dropdown" ref={dropdownRef}>
      {/* Profile Icon Button */}
      <button className="profile-button" onClick={() => setOpen(!open)}>
        <FiUser size={20} />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="profile-menu">
<<<<<<< HEAD
           <div className="menu-item" onClick={() => navigate("/profile")}>
            <FiUser className="icon" />
            <span>Profile</span>
          </div>
=======
          <div className="menu-item">
            <FiUser className="icon" />
            <span>Profile</span>
          </div>
          <div className="menu-item">
            <FiSettings className="icon" />
            <span>Settings</span>
          </div>
>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
          <div className="menu-item logout-btn" onClick={handleLogout}>
            <FiLogOut className="icon" />
            <span>Logout</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
