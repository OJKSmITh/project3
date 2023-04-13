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
      console.log(token)
      res.cookie('token', token, {
        maxAge: 24 * 60 * 60 * 1000, // 쿠키 만료 시간 설정
        secure: true, // Secure 속성 추가
        domain: ".hanjin.shop" 
      });
      res.send(true);
    } catch (e) {
      next(e);
    }
  }

  async postSnsLogin(req,res,next) {
    try {
      const {token} = req.body
      let decodedToken
      if (/[\u0080-\uffff]/.test(token)) {
        // 쿠키 값이 UTF-8로 인코딩된 경우
        decodedToken = decodeURIComponent(token);
      } else {
        // 쿠키 값이 인코딩되지 않은 경우
        decodedToken = token;
      }
      const response = await this.authService.Snscheck({decodedToken}) 
      console.log(response, "auth.controller : :::::::::::::::::::")
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
      console.log(email, "dvsdfsdfsdfsdf")
      const repetition = await this.authService.repetition({email})
      if(repetition !==null) return res.status(600).send("아이디가 중복됩니다")
      const value = await this.mail(email)
      req.session.random = value
      console.log(req.session, "req.session입니다아아아아아아아아아아아아아아아아아아")
      const sessionId = req.session.id
      res.cookie('sessionId', sessionId, {
        maxAge: 24 * 60 * 60 * 1000, // 쿠키 만료 시간 설정
        secure: true, // Secure 속성 추가
        domain: ".hanjin.shop" 
      });
      res.json(sessionId)
    } catch (e) {
      next(e)
    }
  }

  async postNumbercheck(req,res,next){
    try {
      const {number, sessionId} = req.body

      console.log(number, sessionId, "session::::::::::::::::::::::")
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
      console.log(prevSession, "prevSession 입니다아아아아아아아아아아아아ㅏ아아아아아아아앙")
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
