class UserRepository {
  constructor({ User }) {
    this.User = User;
  }

  async addUser(payload) {
    try {
      const user = (await this.User.create(payload)).get({plain:true});
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }

  async snsAddUser(payload){
    try {
      const  {email, userpw, phoneNumber, nickname, userImg, level} = payload
      const user = await this.User.findOrCreate({where:{email, userpw, phoneNumber, nickname, userImg, level }, raw:true})
      console.log(user, "123123435345345234324234")
      return user
    } catch (e) {
      throw new Error(e)
    }
  }
}

module.exports = UserRepository;
