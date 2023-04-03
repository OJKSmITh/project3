class UserController {
  constructor({ userService }) {
    this.userService = userService;
  }

  async postSignup(req, res, next) {
    try {
      const user = await this.userService.signup(req.body);
      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = UserController;
