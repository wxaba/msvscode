const express = require("express");
const fs = require("fs");
const path =require("path");
const app = express();
app.use('../work_pxpt', express.static('public'));
app.get('/',function(req, res){
res.sendFile('/Users/wuzei/Documents/msvscode/work_pxpt/index.html')
})
app.get('/*',function(req, res){
    res.sendFile('/Users/wuzei/Documents/msvscode/work_pxpt'+req.url)
    })
app.listen(80,() => {
    console.log('服务已启动')
});

