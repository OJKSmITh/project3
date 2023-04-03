// require("dotenv").config();

const config = {
    FEhost : process.env.FRONTHOST || "127.0.0.1",
    FEport : process.env.FRONTPORT || "3000",
    BEhost : process.env.BACKHOST  || "127.0.0.1",
    BEport : process.env.BACKPORT || 3001
}

module.exports = config