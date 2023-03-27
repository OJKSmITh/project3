const { port } = require('./config')
const app = require('./app')
const { sequelize } = require('./models')
const {PORT} = process.env


app.listen(port, async ()=>{
    await sequelize.sync({force:false})
    console.log(`${port} BE SERVER START`)
})