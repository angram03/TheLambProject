const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

const generateToken = (data) => {
  return jwt.sign(data, SECRET_KEY, { expiresIn: "24h" });
  // console.log(jwt.sign(data, SECRET_KEY, { expiresIn: "24h" }));
};

const createdUserJwt = (user) => {
  const payload = {
    email: user.email,
    id: user.id,
    isAdmin: user.isAdmin || false,
  };
  console.log("JWT payload", payload);
  return generateToken(payload);
};
const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (err) {
    return {};
  }
};
module.exports = {
  generateToken,
  createdUserJwt,
  validateToken,
};
