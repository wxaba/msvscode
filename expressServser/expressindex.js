const express = require('express');
const app = express();

app.get('/',function(req, res){
    res.send('hello Express haha!');
}).listen(8888,() => {
    console.log('服务已启动')
});
