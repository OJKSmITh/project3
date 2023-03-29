class AuthService {
  constructor({ authRepository, jwt }) {
    this.authRepository = authRepository;
    (this.jwt = jwt), (this.crypto = jwt.crypto);
  }

  async token({ email, userpw }) {
    try {
      if (!email || !userpw) throw "내용이 없습니다";
      const hash = this.crypto
        .createHmac("sha256", "web7722")
        .update(userpw)
        .digest("hex");
      const user = await this.authRepository.getUserByInfo({
        email,
        userpw: hash,
      });

      if (!user) throw "아이디와 패스워드가 일치하지 않습니다";

      const token = this.jwt.sign(user);
      return token;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = AuthService;
