const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'sh-cdb-bki05w7g.sql.tencentcdb.com',
  port:63650,
  user: 'wx',
  password: 'wxwx',
  database: 'learn'
});

let username = 'ps'
let pwd = '111'

let sql = 'SELECT * from user where username = "'+username+'"'
connection.query(sql, (error, results, fields) =>{
  if (error) {
    console.log('cw')
  } else {
    if(results.length == 0){
      console.log('无用户')
    } else {
      results = JSON.parse(JSON.stringify(results))
      if(pwd != results[0].password){
        console.log('密码错误')
      } else {
        console.log('密码正确')
      }
    }
  };
});