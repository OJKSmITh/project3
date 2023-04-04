const session = require('express-session');

class AuthController {
  constructor({ authService, mail }) {
    this.authService = authService;
    this.mail = mail
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

  async postSnsLogin(req,res,next) {
    try {
      const {token} = req.body
      console.log(token)
      const response = await this.authService.Snscheck({token}) 
      res.cookie("token", token)
      res.status(200).json(response)
    } catch (e) {
      next(e)
    }
  }

  async postMailcheck(req,res,next){
    try {
      let {email:{props}} = req.body
      let email = props
      const repetition = await this.authService.repetition({email})
      if(repetition !==null) return res.status(600).send("아이디가 중복됩니다")
      const value = await this.mail(email)
      req.session.random = value
      const sessionId = req.session.id
      res.cookie("sessionId", sessionId)
      res.json(sessionId)
    } catch (e) {
      next(e)
    }
  }

  async postNumbercheck(req,res,next){
    try {
      const {number, sessionId} = req.body
      const result = new Promise((resolve, reject)=>{
        req.sessionStore.get(sessionId, (error, session)=>{
          if(error){
            reject(error)
          } else{
            resolve(session)
          }
        })
      })
      const prevSession = await result
      if(number === prevSession.random){
        res.clearCookie("sessionId")
        res.status(200).send(true)
      } else{
        throw new Error(e)
      }
    } catch (e) {
      next(e)
    }
  }
}

module.exports = AuthController;
