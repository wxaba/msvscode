var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'sh-cdb-bki05w7g.sql.tencentcdb.com',
    port:'63650',
    user:'wx',
    password:'wx',
    database:'hr'
});
connection.connect();
connection.query('select * from `A类`;',function(err, reults, fields){
    if (err) throw err;
    console.log(reults[0].中铁姓名);
});