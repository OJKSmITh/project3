class UserService {
  constructor({ userRepository, jwt, DateFormat }) {
    this.userRepository = userRepository;
    this.jwt = jwt;
    this.crypto = jwt.crypto;
    this.DateFormat = DateFormat;
  }

  async signup({ email, userpw, nickname }) {
    try {
      if (!email || !userpw || !nickname) throw "내용이없다";
      const hash = this.crypto
        .createHmac("sha256", "web7722")
        .update(userpw)
        .digest("hex");

      const user = await this.userRepository.addUser({
        email,
        nickname,
        userpw: hash,
      });

      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = UserService;
