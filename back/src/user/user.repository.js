class UserRepository {
  constructor({ User }) {
    this.User = User;
  }

  async getUser(nickname){
    try{
      const result = await this.User.findOne({ 
        attributes: { exclude: ["userpw"] },
        where:{nickname},
        raw:true})
      return result
    }catch(e){
      console.log(e.message)
    }
  }

  async addUser(payload) {
    try {
      const user = (await this.User.create(payload)).get({plain:true});
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateUser({nickname, data}){
    try{
      console.log("repo 인자:::",nickname, data)
      const result = await this.User.update(data, {where:{nickname}})
      console.log('repo result',result)
      return result
    }catch(e){
      console.log('repo:::',e.message)
    }
  }

  async snsAddUser(payload){
    try {
      const  {email, userpw, phoneNumber, nickname, userImg, level} = payload
      const user = await this.User.findOrCreate({where:{email, userpw, phoneNumber, nickname, userImg, level }, raw:true})
      return user
    } catch (e) {
      throw new Error(e)
    }
  }
}

module.exports = UserRepository;
