import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyToken = (req, res, next) => {
    try {
      const { token } = req.cookies; 
      if (!token)
        return res
          .status(401)
          .json({ message: "No token, authorization denied" });
  
      jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
        if (error) {
          return res.status(401).json({ message: "Token is not valid" });
        }
        req.user = user;
        next();
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

export default verifyToken;
