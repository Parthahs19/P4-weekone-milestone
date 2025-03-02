import jwt from "jsonwebtoken";
import User from "../models/user.js";

// Middleware to protect routes and verify user token
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Extract token from the Authorization header
      token = req.headers.authorization.split(" ")[1];

      // Verify and decode JWT
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch user details excluding password
      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(401).json({ success: false, message: "User not found, authorization denied" });
      }

      // Attach user details to request object
      req.user = user;
      next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ success: false, message: "Session expired, please login again" });
      }
      return res.status(401).json({ success: false, message: "Invalid token, authentication failed" });
    }
  } else {
    res.status(401).json({ success: false, message: "No token provided, authorization denied" });
  }
};

// Middleware to check if user is an admin
const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ success: false, message: "Access denied. Admin privileges required." });
  }
};

export { protect, isAdmin };
