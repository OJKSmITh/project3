class UserController {
  constructor({ userService }) {
    this.userService = userService;
  }

  async postSignup(req, res, next) {
    try {
      const { email, userpw, nickname } = req.body;
      const user = await this.userService.signup({ email, userpw, nickname });
      // console.log(user);
      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = UserController;
