const { log } = require('console');
var mysql = require('mysql')

var connection = mysql.createConnection({
    host:'sh-cdb-bki05w7g.sql.tencentcdb.com',
    port:'63650',
    user:'wx',
    password:'wx',
    database:'learn'
});

var arr = [1,2];

connection.connect();
connection.query('select * from user',function(err, result){
    if(err){
        console.log(err.message);
        return;
    }
    if(result == ''){
        console.log('无查询结果')
    }
    else{
        for(i=0;i<result.length;i++){
            console.log(result[i].username);
        };
    };
});
connection.end();