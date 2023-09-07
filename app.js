const http = require('http');
const cors = require('cors');
const express = require('express'); // 
const jwt = require('jasonwebtoken'); // 토큰 발행 프레임워크
const dotenv = require('dotenv');
const { DataSource } = require('typeorm');

DataSource = myDataSource.query(`SELECT * FROM users`)

const app = express()
app.use(json) //json 형태 parsing

// //회원가입
// app.get("/signUp", async(req, res) => {
//     try {
//         const { email, name, password } = await myDataSource.query(`INSERT email, name, password INTO users VALUES `$(name)`,`$(password)`,`$(email)``);
//         if ( email == undefined || name == undefined || password == undefined ) {
//             console.log("KEY_ERROR");
//             const error = new Error(400);
//             throw error;
//             return res.status(400).json("KEY_ERROR")
//         } 
//         // else if ( email !== undefined ) {
//         // //     email = await myDataSource.query('SELECT email FROM users')
//         //     const error = new Error(401);
//         //     throw error;
//         //     return res.status(400).json("DUPLICATED_EMAIL")
//         // } else if ()


//         // }
        
//         console.log("USER_CREATED_SUCCESSFULLY");
//         return res.status(201).json("USER_CREATED");
//     } catch (error) {
//         console.log(error);
//         return res.status(400).json(error);
//     }
// }})


//서버를 시작하는 함수
app.listen(3000, function () {
    console.log('server listening on port 3000')
  })
//데이터 베이스를 연결하는 함수
myDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
//토큰발행