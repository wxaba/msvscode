const express = require("express");
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();

app.use(express.static(path.join(path.dirname(__dirname),'web')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/login',(req, res)=>{
    res.sendFile(path.join(path.dirname(__dirname),'web','login.html'))
});

/*实现oa 账号*/
app.post('/oalogin',(req, res)=>{
    const form = new FormData();
    form.append("UNAME",req.body.UNAME);
    form.append("PASSWORD",req.body.PASSWORD);
    form.append("encode_type",1);
    fetch('http://www.crcegsh.com/logincheck.php',{
        method:'post',
        body:form
    }).then((response) => {
        return response.text();
    }).then((response) =>{
        if(response.length == 1782){
            res.sendFile(path.join(path.dirname(__dirname),'web','index.html'))
            console.log(response);
            console.log("账号: " + req.body.UNAME);
            console.log("密码: " + req.body.PASSWORD);
        }else{
            console.log(response);
            res.send('密码错误');
            console.log("密码错误");
        }
    })
});

app.post('/login',(req, res)=>{
    const connection = mysql.createConnection({
        host: 'sh-cdb-bki05w7g.sql.tencentcdb.com',
        port:63650,
        user: 'wx',
        password: 'wxwx',
        database: 'learn'
      });
      
      let sql = 'SELECT * from user where username =?'
      connection.query(sql, req.body.UNAME,(error, results, fields) =>{
        if (error) {
          res.send({code:0,msg:'发生错误'})
        } else {
          if(results.length == 0){
            res.send({code:1,msg:'无此用户'})
          } else {
            results = JSON.parse(JSON.stringify(results))
            if(req.body.PASSWORD != results[0].password){
              res.send({code:2,msg:'密码错误'})
            } else {
              let token = jwt.sign({
                uid:results[0].uid,
                username:results[0].username
              },'kuri',{expiresIn:"720h"})
              console.log(token)
              res.send({code:3,msg:'登陆成功',token:token})
            }
          }
        };
      });
});
app.listen(80,() => {console.log('服务已启动')});