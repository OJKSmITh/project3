class AuthController {
  constructor({ authService }) {
    this.authService = authService;
  }

  async postLogin(req, res, next) {
    try {
      const { useremail, userpw } = req.body;
      const token = await this.authService.token({ useremail, userpw });
      // res.setHeader('Authorizaion', 'Bearer' + token)
      if(typeof token === "object" ){
        res.send(false)
      }
      res.cookie("token", token);
      res.send(true);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = AuthController;
