class UserService {
  constructor({ userRepository, jwt, DateFormat }) {
    this.userRepository = userRepository;
    this.jwt = jwt;
    this.crypto = jwt.crypto;
    this.DateFormat = DateFormat;
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
      const user = await this.userRepository.addUser(userInfo)
      return user
    } catch (e) {
      
    }
  }
}

module.exports = UserService;
