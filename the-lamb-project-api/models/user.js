const { UnauthorizedError } = require("../utils/errors");
class User {
  static async login(credentials) {
    throw new UnauthorizedError("Invalid username and password");
  }
  static async registration(credentials) {}
}
