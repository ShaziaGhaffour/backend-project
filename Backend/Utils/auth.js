import jwt from "jsonwebtoken";

const secretKey = "thisistestingwebsitesecretkeylklklkjfjldsj";

export const setUser = async (user) => {
    const userData = {
        id: user._id,
        name: user.name,
        email: user.email
    };
    return jwt.sign(userData, secretKey);
};

export const verifyUser = async (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({ message: "You are not logged in" });
    }
    const user = await jwt.verify(token, secretKey);
    req.user = user;
    next();
};

