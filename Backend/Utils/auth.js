// import jwt from "jsonwebtoken";

// const secretKey = "thisistestingwebsitesecretkeylklklkjfjldsj";

// export const setUser = async (user) => {
//     const userData = {
//         id: user._id,
//         name: user.name,
//         email: user.email
//     };
//     return jwt.sign(userData, secretKey);
// };

// export const verifyUser = async (req, res, next) => {
//     const token = req.cookies?.token;
//     if (!token) {
//         return res.status(401).json({ message: "You are not logged in" });
//     }
//     const user = await jwt.verify(token, secretKey);
//     req.user = user;
//     next();
// };

import jwt from "jsonwebtoken";

const secretKey = "thisistestingwebsitesecretkeylklklkjfjldsj";
export const setUser = (user) => {
    const userData = {
        id: user._id,
        name: user.name,
        email: user.email
    };

    // Token expires in 7 days (adjust if needed)
    return jwt.sign(userData, secretKey, { expiresIn: "7d" });
};

/**
 * Middleware to verify user authentication
 */
export const verifyUser = (req, res, next) => {
    try {
        let token;
        
        // First check Authorization header (Bearer token)
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
            token = authHeader.substring(7); // Remove 'Bearer ' prefix
        }
        // Fallback to cookies if no Authorization header
        else {
            token = req.cookies?.token;
        }

        if (!token) {
            return res.status(401).json({ message: "You are not logged in" });
        }

        // Verify token
        const user = jwt.verify(token, secretKey);

        // Attach user data to request
        req.user = user;
        next();
    } catch (error) {
        console.error("JWT verification failed:", error.message);
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};