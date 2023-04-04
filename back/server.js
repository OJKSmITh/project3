const { port } = require('./config')
const app = require('./app')
const { sequelize } = require('./models')
const {
  models: { User, Board, Comment, Liked, Note },
} = sequelize

app.listen(port, async () => {
  await sequelize.sync({ force: false });
  // await User.create({
  //   email: "admin@h2.com",
  //   nickname : "test1",
  //   userpw: "d412387ddb361d72b8aebb81b565dc2a1de003b1a7b8717b6768b1d06e2fd639",
  //   phoneNumber: "01045454545",
  //   userImg: "h2h2h2",
  //   level:"user",
  // })
  // await Board.create({
  //   subject: "test제목입니다",
  //   content: "test페이지입니다",
  //   hit:0,
  //   state:"blind",
  //   nickname: "test1",
  // })
  console.log(`${port} BE SERVER START`);
});
