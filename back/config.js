require("dotenv").config();
// const BadRequest = require("./exceptions/BadRequest");

const config = {
  //   exception: {
  //     BadRequest,
  //   },
  KAKAO_HOST: process.env.KAKAO_HOST,
  KAKAO_REST_API_KEY:process.env.KAKAO_REST_API_KEY,
  KAKAO_REDIRECT_URI:process.env.KAKAO_REDIRECT_URI,
  KAKAO_CLIENT_SECRET:process.env.KAKAO_CLIENT_SECRET,
  NAVER_HOST:process.env.NAVER_HOST,
  NAVER_CLIENT_ID:process.env.NAVER_CLIENT_ID,
  NAVER_CLIENT_SECRET: process.env.NAVER_CLIENT_SECRET,
  SALT: process.env.SALT || "web7722",
  mailer: {
    user: process.env.MAIL_USER || "",
    password: process.env.MAIL_USERPW || "",
  },
  host: process.env.HOST || "127.0.0.1",
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || "3001",
  redirect_host: process.env.REDIRECT_HOST || "localhost",
  redirect_port: process.env.REDIRECT_PORT || "3005",
  db: {
    development: {
      database: process.env.DB_DATABASE || "",
      username: process.env.DB_USER || "",
      password: process.env.DB_PASSWORD || " ",
      port: process.env.DB_PORT || "",
      host: process.env.DB_HOST || "",
      dialect: "mysql",
      timezone: "Asia/Seoul",
      dialectOptions: {
        dataStrings: true,
        typeCast: true,
      },
      define: { freezeTableName: true, timestamp: false },
    },
  },
};

module.exports = config;
