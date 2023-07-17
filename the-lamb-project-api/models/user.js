const { UnauthorizedError, BadRequestError } = require("../utils/errors");
const { validateFields } = require("../utils/validate");
const db = require("../db");
class User {
  static async login(credentials) {
    // console.log("USER ");
    // const { email, password } = credentials;
    // const requiredField = ["email", "password"];
    // requiredField.forEach((field) => {
    //   if (!credentials.hasOwnProperty(field)) {
    //     throw new BadRequestError(`Missing ${field} in request body`);
    //   }
    // });
    // const user = await User.fetchUserByEmail(email);
    // if (user) {
    //   console.log("GOOD");
    //   if (isValid) {
    //     return User.makePublicUser(user);
    //   }
    // }
    // throw new UnauthorizedError("Invalid email and password");
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
      [lowercasedEmail, credentials.password]
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
