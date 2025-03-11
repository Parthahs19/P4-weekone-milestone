import User from "../models/user.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";
import crypto from "crypto";
import nodemailer from "nodemailer";

// ✅ Register a New User
export const registerUser = async (req, res) => {
<<<<<<< HEAD
  console.log("🔥 Received Signup Request:", req.body);
  const { firstName, lastName, email, password, role } = req.body;

  try {
    // ✅ Validate required fields
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Ensure firstName and lastName contain only letters
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
      return res.status(400).json({ message: "First and Last names must contain only letters." });
    }

    // ✅ Validate Email Format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    // ✅ Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    // ✅ Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // ✅ Create New User
    const user = await User.create({
      firstName,
      lastName,
=======
  const { name, email, password, role } = req.body;
  
  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    // Encrypt the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      name,
>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
      email,
      password: hashedPassword,
      role: role || "user",
    });

    res.status(201).json({
<<<<<<< HEAD
      success: true,
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
=======
      _id: user._id,
      name: user.name,
>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
<<<<<<< HEAD
  console.log(email,password);

  try {
    const user = await User.findOne({ email }).select("+password"); // Ensure password is retrieved
    if (!user) return res.status(400).json({ message: "Invalid Credentials" });
    console.log(user);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });
    

    res.json({
      success: true,
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
=======
  
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid Credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

    res.json({
      _id: user._id,
      name: user.name,
>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Get User Profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Update User Profile
export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
<<<<<<< HEAD
    if (!user) return res.status(404).json({ message: "User not found" });

    // ✅ Update Fields
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
=======

    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = req.body.name || user.name;
>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
    user.email = req.body.email || user.email;

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.body.password, salt);
    }

    const updatedUser = await user.save();
<<<<<<< HEAD
    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
=======

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
      email: updatedUser.email,
      role: updatedUser.role,
      token: generateToken(updatedUser._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Forgot Password (Generate Reset Token)
export const forgotPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
<<<<<<< HEAD
    if (!user) return res.status(404).json({ message: "User not found" });

    // ✅ Generate Reset Token
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    // ✅ Send Email (Using Nodemailer)
=======

    if (!user) return res.status(404).json({ message: "User not found" });

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    user.resetPasswordExpire = Date.now() + 3600000; // 1 hour expiration

    await user.save();

    // Send Email (Using Nodemailer)
>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const resetUrl = `${req.protocol}://${req.get("host")}/api/users/reset-password/${resetToken}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Password Reset Request",
      text: `Click the link to reset your password: ${resetUrl}`,
    };

    await transporter.sendMail(mailOptions);
<<<<<<< HEAD
=======

>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
    res.json({ message: "Password reset link sent to email" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

<<<<<<< HEAD
// ✅ Reset Password
=======
// ✅ Reset Password (Using Reset Token)
>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
export const resetPassword = async (req, res) => {
  try {
    const resetTokenHash = crypto.createHash("sha256").update(req.params.token).digest("hex");

    const user = await User.findOne({
      resetPasswordToken: resetTokenHash,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ message: "Invalid or expired token" });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
<<<<<<< HEAD
=======

>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
    res.json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

<<<<<<< HEAD
// ✅ Logout User
export const logoutUser = async (req, res) => {
  try {
=======
// ✅ Logout User (Token Blacklisting)
export const logoutUser = async (req, res) => {
  try {
    // Ideally, we use a token blacklist database or session management for this.
>>>>>>> b68aac7ddae456b550c7c254324c6a46674ebe80
    res.json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Get All Users (Admin Only)
export const getAllUsers = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access Denied. Admins only." });
    }

    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Delete User (Admin Only)
export const deleteUser = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access Denied. Admins only." });
    }

    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    await user.remove();
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
