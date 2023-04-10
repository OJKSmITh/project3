class UserController {
  constructor({ userService, qs, axios, config }) {
    this.userService = userService;
    this.qs = qs
    this.axios = axios
    this.config = config
  }

  async getMe(req,res,next) {
    try{
      const { token } = req.params
      const response = await this.userService.me(token)
      res.send(response)
    }catch(e){
      console.log(e.message)
    }
  }

  async userModify(req,res,next){
    try{
      const nickname = req.cookies.token
      const data = req.body
      console.log(data)
      if(data.userImg) data.userImg=`http://${this.config.host}:${this.config.port}/${data.userImg}`
      console.log(data)
      const response = await this.userService.modify({nickname, data})
      console.log(response)
    }catch(e){
      console.log(e.message)
    }
  }

  async postSignup(req, res, next) {
    try {
      console.log(req.body)
      req.body.userImg = `http://${this.config.host}:${this.config.port}/${req.body.userImg}`
      const user = await this.userService.signup(req.body);
      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  }

  async kakaoSignin(req, res, next){
    try{
      const {code} = req.query
      const kakaoHost = process.env.KAKAO_HOST
      const REST_API_KEY = process.env.KAKAO_REST_API_KEY
      const REDIRECT_URI =  process.env.KAAKO_REDIRECT_URI
      const CLIENT_SECRET = process.env.KAKAO_CLIENT_SECRET
      const headers ={
        "Content-type": "application/x-222-form-urlencoded;charset=utf-8"
      }
      const host = `${kakaoHost}/oauth/token`
      const body = this.qs.stringify({
        grant_type:"authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code,
        client_secret: CLIENT_SECRET
      })
      const response = await this.axios.post(host, body, headers)
      const { access_token } = response.data
      const hostUser = `https://kapi.kakao.com/v2/user/me`
      const {data} = await this.axios.post(hostUser, null,{
        headers: {
          'Content-type':"application/x-www-form-urlencoded",
          Authorization:`Bearer ${access_token}`
        }
      })

      const userInfo = {
        email: data.kakao_account.email,
        nickname: data.kakao_account.profile.nickname,
        userpw: data.id,
        phoneNumber: "01000000000",
        userImg: data.properties.profile_image,
        level:"user"
      }
      const response2 = await this.userService.kakaoSignup(userInfo)
      const token = data.id
      res.cookie("token", token)
      res.redirect(`http://localhost:3000`)
    } catch(e) {
      next(e)
    }
  }

  async naverSignin(req, res, next){
    try {
      const {code, state} = req.query
      const HOST = process.env.NAVER_HOST
      const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID
      const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET
      const NAVER_TOKEN_URI = `${HOST}&client_id=${NAVER_CLIENT_ID}&client_secret=${NAVER_CLIENT_SECRET}&code=${code}`
      const NAVER_CALL_BACK="http://localhost:3001/oauth/naver"
      const response = await this.axios.post(NAVER_TOKEN_URI) 
      // console.log(response)
      const headers = {
        'Authorization': `Bearer ${response.data.access_token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
      const naverInfoUrl = `https://openapi.naver.com/v1/nid/me`
      const user = await this.axios.get(naverInfoUrl, {headers})
      const userInfo = {
        email: user.data.response.email,
        nickname: user.data.response.nickname,
        userpw: user.data.response.nickname,
        phonenumber: user.data.response.mobile_e164,
        userImg: user.data.response.profile_image,
        level:"user"
      }
      const response2 = await this.userService.naverSignup(userInfo)
      res.cookie("token", response2.nickname)
      res.redirect(`http://localhost:3000`)
    } catch (e) {
      next(e)
    }
  }

  async googleSignin(req, res, next){
    try {
      const {code} = req.query
      const GOOGLE_TOKEN_URI = `https://oauth2.googleapis.com/token`
      const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
      const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
      const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI
      const GOOGLE_GRANT_TYPE = "authorization_code"
      const header = {
        'Content-Type' : 'application/json'
      }
      const data1 = {
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        code: code,
        redirect_uri: GOOGLE_REDIRECT_URI,
        grant_type: GOOGLE_GRANT_TYPE
      }
      const response = await this.axios.post(GOOGLE_TOKEN_URI, data1, {header})
      const {access_token} = response.data
      const googleInfoUrl = "https://www.googleapis.com/oauth2/v2/userinfo"
      const headers = {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
      const {data} = await this.axios.get(googleInfoUrl, {headers})
      const response2 = await this.userService.googleSignup(data)
      res.cookie("token", response2.nickname)
      res.redirect(`http://localhost:3000`)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = UserController;
