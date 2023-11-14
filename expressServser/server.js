const express = require("express");
const app = express();
app.get('/',function(req, res){
res.sendFile('/Users/wuzei/Documents/msvscode/work_pxpt/index.html')
})
app.get('/*',function(req, res){
    res.sendFile('/Users/wuzei/Documents/msvscode/work_pxpt'+req.url)
    })
app.listen(80,() => {console.log('服务已启动')});