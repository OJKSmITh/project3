class AuthController {
  constructor({ authService }) {
    this.authService = authService;
  }

  async postLogin(req, res, next) {
    console.log(req.body);
    try {
      const { email, userpw } = req.body;
      const token = await this.authService.token({ email, userpw });

      // res.setHeader('Authorizaion', 'Bearer' + token)
      res.cookie("token", token);
      res.send("message:success");
    } catch (e) {
      next(e);
    }
  }
}

module.exports = AuthController;
