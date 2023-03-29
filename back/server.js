
const { port } = require('./config')
const app = require('./app')
const { sequelize } = require('./models')



app.use(cors({ origin: true, credentials: true }));
app.listen(port, async () => {
  await sequelize.sync({ force: false });
  console.log(`${port} BE SERVER START`);
});
