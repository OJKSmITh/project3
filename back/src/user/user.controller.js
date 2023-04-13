const Romanization = require('hangul-romanization')

class UserController {
  constructor({ userService, qs, axios, config}) {
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
      console.log('ctrl:::',data)
      if(data.userImg) data.userImg=`http://${this.config.host}:${this.config.port}/${data.userImg}`
      console.log(data)
      const response = await this.userService.modify({nickname, data})
      console.log(response)
      res.send(response)
    }catch(e){
      console.log(e.message)
    }
  }

  async postSignup(req, res, next) {
    try {
      req.body.userImg = `http://${this.config.host}:${this.config.port}/${req.body.userImg}`
      const user = await this.userService.signup(req.body);
      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  }

  async kakaoSignin(req, res, next){
    console.log(this.Romanization, "Romanization::::::::::::::::::::::::::::")
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
      console.log(response, "resposne:::::::::::::::::::::::::")
      const { access_token } = response.data
      const hostUser = `https://kapi.kakao.com/v2/user/me`
      const {data} = await this.axios.post(hostUser, null,{
        headers: {
          'Content-type':"application/x-www-form-urlencoded",
          Authorization:`Bearer ${access_token}`
        }
      })
      console.log(data, "data:::::::::::::::::::::::::::::::")
      const koreanName = data.kakao_account.profile.nickname;
      const englishName = Romanization(koreanName);
      console.log(englishName, "englishName ::::::::::::::::::::::::::::")

      const userInfo = {
        email: data.kakao_account.email,
        nickname: englishName,
        userpw: data.id,
        phoneNumber: "01000000000",
        userImg: data.properties.profile_image,
        level:"user"
      }
      console.log(userInfo, "userInfo::::::::::::::::::::::::::::::::")
      const response2 = await this.userService.kakaoSignup(userInfo)
      console.log(response2, "resposne2 ::::::::::::::::::::")
      const token = userInfo.nickname
      
      console.log(englishName, "english name :::::::::::::::::")
      res.cookie('token', englishName, {
        maxAge: 24 * 60 * 60 * 1000, // 쿠키 만료 시간 설정
        secure: true, // Secure 속성 추가
        domain: ".hanjin.shop" 
      });
      res.redirect(`https://hanjin.shop`)
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
      const NAVER_CALL_BACK="https://api.hanjin.shop/oauth/naver"
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
      console.log(response2, " response2::::::::::::::::::::::")
      res.cookie('token', response2.nickname, {
        maxAge: 24 * 60 * 60 * 1000, // 쿠키 만료 시간 설정
        secure: true, // Secure 속성 추가
        domain: ".hanjin.shop" 
      });
      res.redirect(`https://hanjin.shop`)
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
      console.log(response, "첫번쨰 response :::::::::::::::::")
      const {access_token} = response.data
      const googleInfoUrl = "https://www.googleapis.com/oauth2/v2/userinfo"
      const headers = {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
      const {data} = await this.axios.get(googleInfoUrl, {headers})
      console.log(data, "여기가 data다아아아ㅏㅇ아ㅏ아아아아아아아아앙:::::")
      const response2 = await this.userService.googleSignup(data)
      console.log(response2, "여기가 response2이다아아아아아ㅏ아아아아아")
      res.cookie('token', response2.nickname, {
        maxAge: 24 * 60 * 60 * 1000, // 쿠키 만료 시간 설정
        secure: true, // Secure 속성 추가
        domain: ".hanjin.shop" 
      });
      res.redirect(`https://hanjin.shop`)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = UserController;
