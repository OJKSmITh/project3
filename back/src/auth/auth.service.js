class AuthService {
  constructor({ authRepository, jwt }) {
    this.authRepository = authRepository;
    (this.jwt = jwt), (this.crypto = jwt.crypto);
  }

  async token({ useremail, userpw }) {
    try {
      if (!useremail || !userpw) throw "내용이 없습니다";
      const hash = this.crypto
        .createHmac("sha256", "web7722")
        .update(userpw)
        .digest("hex");
      const user = await this.authRepository.getUserByInfo({
        useremail,
        userpw: hash,
      });

      if (!user) throw "아이디와 패스워드가 일치하지 않습니다";


      const token = user.nickname;
      return token;
    } catch (e) {
      return new Error(e);
    }
  }

  async Snscheck({token}){
    try {
      const hash = this.crypto
        .createHmac("sha256", "web7722")
        .update(token)
        .digest("hex");
      const response = await this.authRepository.getUserSnsByInfo({
        hash   
      })
      response.nickname = token
      return response
    } catch (e) {
     return new Error(e) 
    }
  }

  async repetition(email){
    try {
      const response = await this.authRepository.getRepetition(email)
      return response
    } catch (e) {
      return new Error(e)
    }
  }
}

module.exports = AuthService;
