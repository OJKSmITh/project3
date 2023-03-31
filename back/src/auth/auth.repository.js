class AuthRepository {
  constructor({ User }) {
    this.User = User;
  }

  async getUserByInfo({ useremail, userpw }) {
    try {
      const user = await this.User.findOne({
        raw: true,
        // attributes: { exclude: ["userpw"] },
        where: {
          email:useremail,
          userpw,
        },
      });
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = AuthRepository;
