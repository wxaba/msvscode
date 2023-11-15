const express = require("express");
const app = express();
app.get('/',function(req, res){
res.sendFile('/Users/wuzei/Documents/msvscode/work_pxpt/index.html')
})
app.get('/*',function(req, res){
    res.sendFile('/Users/wuzei/Documents/msvscode/work_pxpt'+req.url)
    })
app.post('/login',function(req, res){
    console.log(req.headers)
    res.send('登陆成功')
})
app.listen(80,() => {console.log('服务已启动')});