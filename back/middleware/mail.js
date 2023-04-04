let nodemailer = require("nodemailer")
const path = require("path");
const dotenv = require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const randomValue = []
for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    randomValue.push(randomNum);
}
const randomValues = randomValue.join('')


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GOOGLE_USER_EMAIL, // 발신자 이메일 계정
      pass: process.env.GOOGLE_USER_PASS // 발신자 이메일 계정 비밀번호
    }
});

const mailOptions= (toUser)=>{    
    return {
        from: process.env.GOOGLE_USER_EMAIL, // 발신자 이메일 주소
        to: toUser, // 수신자 이메일 주소
        subject: 'Gpt Music의 인증메일 입니다.', // 제목
        text: `안녕하세요 인증번호를 확인해주세요 ${randomValues}` // 내용
    }
}

const uploademail= (toUser) =>{
  return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions(toUser), (error, info)=>{
          if (error) {
              console.log(error);
              reject(error);
          } else {
              console.log('Email sent: ' + info.response);
              resolve(randomValues);
          }
      })
  });
}

module.exports = uploademail