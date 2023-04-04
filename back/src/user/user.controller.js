class UserController {
  constructor({ userService, qs, axios }) {
    this.userService = userService;
    this.qs = qs
    this.axios = axios
  }

  async postSignup(req, res, next) {
    try {
      const user = await this.userService.signup(req.body);
      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  }

  async kakaoSignin(req, res, next){
    try{
      const {code} = req.query
      const kakaoHost = ``
      const REST_API_KEY = ""
      const REDIRECT_URI =  ""
      const CLIENT_SECRET = ""
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
        useremail: data.kakao_account.email,
        nickname: data.kakao_account.profile.nickname,
        userpw: data.id,
        phonenumber: "01000000000",
        userImg: data.properties.profile_image,
        level:"user"
      }
      const {userpw} = await this.userService.kakaoSignup(userInfo)
      const token = userpw
      res.cookie("token", token)
      res.redirect(`http://localhost:3000/welcome`)
    } catch(e) {
      next(e)
    }
  }

  async kakaoCheck(req,res,next){
    try {
      console.log(req.body ,"aaaaaaaaaaaaaaaa")
    } catch (e) {
      
    }
  }
  async naverSignin(req, res, next){
    try {
      const {code, state} = req.query
      const HOST = process.env.NAVER_HOST || ""
      const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID || ""
      const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET || ""
      const NAVER_TOKEN_URI = `${HOST}&client_id=${NAVER_CLIENT_ID}&client_secret=${NAVER_CLIENT_SECRET}&code=${code}`
      const response = await this.axios.post(NAVER_TOKEN_URI) 
      // console.log(response)
      const headers = {
        'Authorization': `Bearer ${response.data.access_token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
      const naverInfoUrl = `https://openapi.naver.com/v1/nid/me`
      const user = await this.axios.get(naverInfoUrl, {headers})
      console.log(user)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = UserController;
