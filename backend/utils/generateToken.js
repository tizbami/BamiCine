import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";
export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" });

  res.cookie("jwt-bamicine", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in ms
    httpOnly: true, // prevents client-side JS from accessing the cookie
    sameSite:"strict", // prevents the cookie from being sent with cross-site requests
    secure: ENV_VARS.NODE_ENV !== "development", // 
});
return token;
};

