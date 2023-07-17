const { UnauthorizedError, BadRequestError } = require("../utils/errors");
const { validateFields } = require("../utils/validate");
const bcrypt = require("bcrypt");
const { BRCYPT_WORK_FACTOR } = require("../config");
const db = require("../db");
class User {
  static async makePublicUser(user) {
    return {
      id: user.id,
      email: user.email,
    };
  }
  static async login(credentials) {
    console.log("HELLO fsd");
    const requiredField = ["email", "password"];

    requiredField.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body`);
      }
    });

    const user = await User.fetchUserByEmail(credentials.email);
    console.log(user);
    if (user) {
      console.log(credentials.password);
      console.log(user.password);
      const isValid = await bcrypt.compare(credentials.password, user.password);
      console.log(isValid);
      if (isValid) {
        return User.makePublicUser(user);
      }
    }
    throw new UnauthorizedError("Invalid email and password");
  }
  static async register(credentials) {
    //user should put in their email and password to register
    const requiredFields = ["email", "password"];

    try {
      validateFields({
        required: requiredFields,
        obj: credentials,
        location: "user registration",
      });
    } catch (err) {
      throw err;
    }

    requiredFields.forEach((field) => {
      if (!credentials.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body.`);
      }
    });
    console.log(credentials.email);
    console.log(credentials.password);
    const existingUser = await User.fetchUserByEmail(credentials.email);
    console.log(existingUser);
    if (existingUser) {
      throw new BadRequestError(`Duplicate email: ${credentials.email}`);
    }

    const hashedPassword = await bcrypt.hash(
      credentials.password,
      BRCYPT_WORK_FACTOR
    );

    const lowercasedEmail = credentials.email.toLowerCase();

    const result = await db.query(
      `
        INSERT INTO users(
            email, 
            password
        )
        VALUES ($1, $2)
        RETURNING id, email, password,created_at
        `,

      //this has to be in order
      [lowercasedEmail, hashedPassword]
    );

    const user = result.rows[0];

    return user;
  }
  static async fetchUserByEmail(email) {
    if (!email) {
      throw new BadRequestError("No email provided");
    }
    const query = `SELECT * FROM users WHERE email = $1`;
    const result = await db.query(query, [email.toLowerCase()]);
    const user = result.rows[0];
    return user;
  }
}
module.exports = User;
