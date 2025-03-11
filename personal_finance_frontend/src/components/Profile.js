import React, { useState } from "react";
import { FiUser, FiEdit, FiLogOut, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Partha H S",
    email: "partha@example.com",
    phone: "+91 9876543210",
    occupation: "Full Stack Developer",
    location: "Bangalore, India",
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="profile-page">
      {/* Header */}
      <header className="profile-header">
        <div className="logo">💳 FinTrack_</div>
        <button className="dashboard-btn" onClick={() => navigate("/dashboard")}>
          Go to Dashboard <FiArrowRight />
        </button>
      </header>

      {/* Profile Card */}
      <div className="profile-card">
        <div className="avatar">
          <FiUser size={80} />
        </div>
        <h2>{profile.name}</h2>
        <p>{profile.occupation}</p>

        {isEditing ? (
          <div className="profile-form">
            <input type="text" name="name" value={profile.name} onChange={handleChange} />
            <input type="email" name="email" value={profile.email} onChange={handleChange} />
            <input type="text" name="phone" value={profile.phone} onChange={handleChange} />
            <input type="text" name="occupation" value={profile.occupation} onChange={handleChange} />
            <input type="text" name="location" value={profile.location} onChange={handleChange} />
          </div>
        ) : (
          <div className="profile-info">
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
            <p><strong>Location:</strong> {profile.location}</p>
          </div>
        )}

        <div className="profile-actions">
          <button className="edit-btn" onClick={handleEdit}>
            {isEditing ? "Save Changes" : "Edit Profile"} <FiEdit />
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            Logout <FiLogOut />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
