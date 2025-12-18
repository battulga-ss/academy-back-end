import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { getUserBySteamurlService } from "../services/user.js";

const SECRET_KEY = process.env.JWT_SECRET;

export const login = async (req, res) => {
  const { steamurl, password } = req.body;

  // 1. User байгаа эсэх
  const user = await getUserBySteamurlService(steamurl);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // 2. Password шалгах
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // 3. JWT token үүсгэх
  const token = jwt.sign(
    {
      id: user.id,
      email: user.steamurl,
      role: user.role,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  // 4. Token буцаах
  res.json({
    message: "Login successful",
    token,
  });
};

export const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: "Token required" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 🔹 token-оос email авах
    req.steamurl = decoded.steamurl;

    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
};
