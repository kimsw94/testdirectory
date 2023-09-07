const http = require('http')
const express = require('express')
const cors = require('cors')
const { DataSource, CancellationToken } = require('typeorm');
const { createDecipheriv } = require('crypto');
const { error } = require('console');
const app = express();

app.use(cors());

const myDataSource = new DataSource({
  type: 'mysql', 
  host: 'localhost', 
  port: 3306,
  username: 'root',
  password: '',
  database: 'westagram'
 })


app.use(express.json()) // for parsing application/json

app.get("/", async(req, res) => {
    console.log("Welcome to Server")
})

app.get("/users")

//회원가입
app.post("/signUp", async(req, res) => {
try {
    const { email, name, password } = await myDataSource.query(`
        INSERT INTO users (
          name, 
          password,
          email
          )
          VALUES (
            '${name}',
            '${password}', 
            '${email}'
            )
            `);
    if ( email == undefined || name == undefined || password == undefined ) {
            console.log("KEY_ERROR");
            const error = new Error(400);
            throw error;
            return res.status(400).json("KEY_ERROR")
    } 
        
    // if ( email == req.body.email ) {
    //         // const email = await myDataSource.query('SELECT email FROM users') alternative
    //     const error = new Error(401);
    //     throw error;
    //     return res.status(400).json("DUPLICATED_EMAIL")
// }

    if (password.length <= 8) {
        console.log("PASSWORD_ERROR")
        return res.status(401).json("PASSWORD_ERROR")
    } 
    console.log("USER_CREATED_SUCCESSFULLY");
    return res.status(201).json("USER_CREATED");
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
})






//서버를 시작하는 함수


app.listen(8000, function () {
    console.log('server listening on port 8000')
  })


  //데이터 베이스를 연결하는 함수

myDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
// //토큰발행