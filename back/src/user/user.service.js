class UserService {
  constructor({ userRepository, jwt, DateFormat }) {
    this.userRepository = userRepository;
    this.jwt = jwt;
    this.crypto = jwt.crypto;
    this.DateFormat = DateFormat;
  }

  async me(token){
    try{
      const result = await this.userRepository.getUser(token)
      return result
    }catch(e){
      console.log(e.message)
    }
  }

  async modify({nickname,data}){
    try{
      const result = await this.userRepository.updateUser({nickname, data})
      console.log('serv result:::',result)
      return result
    }catch(e){
      console.log(e.message)
    }
  }

  async signup(data) {
    try {
      const {email, userpw, nickname} = data
      if (!email || !userpw || !nickname) throw "내용이없다";
      const hash = this.crypto
        .createHmac("sha256", "web7722")
        .update(userpw)
        .digest("hex");

      const user = await this.userRepository.addUser({
        ...data,
        userImg: data.userImg ? data.userImg : undefined,
        userpw: hash,
      });

      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
  
  async kakaoSignup(userInfo){
    try {
      const hash = this.crypto.createHmac("sha256", "web7722").update(userInfo.userpw.toString()).digest("hex");
      userInfo.userpw = hash
      const user = await this.userRepository.snsAddUser(userInfo)
    } catch (e) {
      throw new Error(e)
    }
  }

  async naverSignup(userInfo){
    try {
      userInfo.phoneNumber = userInfo.phonenumber.replace("+82","0")
      userInfo.nickname = userInfo.nickname.slice(0,-4)
      userInfo.userpw = userInfo.userpw.slice(0,-4)
      const hash = this.crypto.createHmac("sha256", "web7722").update(userInfo.userpw.toString()).digest("hex")
      userInfo.userpw = hash
      const user = await this.userRepository.snsAddUser(userInfo)
      return userInfo
    } catch (e) {
      throw new Error(e)
    }
  }

  async googleSignup(userInfo){
    try {
      let {id, email, name, picture} =  userInfo
      name = name.replace(' ', ''); 
      name = name.replace('.', '');
      const hash = this.crypto.createHmac("sha256", "web7722").update(name).digest("hex")
      const googleInfo = { 
              email, 
              userpw : hash,
              phoneNumber: "01000000000",
              nickname: name, 
              userImg: picture,
              level: "user", 
      }
      const user = await this.userRepository.snsAddUser(googleInfo)
      return googleInfo
    } catch (e) {
     throw new Error(e) 
    }
  }
}

module.exports = UserService;
