 //01 导入 http 模块
 const http = require('http')
 const fs = require('fs')
 const path = require('path')
 //02 创建服务
let rootpath = '/Users/wuzei/Documents/msvscode/work_pxpt'

 const server = http.createServer((request, response) => {
   
   let {pathname} = new URL(request.url, 'http://127.0.0.1');
   console.log(path.parse(rootpath+request.url));

   fs.readFile(rootpath+pathname,(err,data)=>{
      if(err){
         console.log(err);
         response.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
         response.end('<h1 style="font-size:280px;">页面还没做哦 🐷</h1>');
         return
      }
      else{
         response.write(data);
         response.end(); //设置响应体，结束响应
      }      
      
   })

 });
 //03 监听端口，启动服务
 server.listen(80, () => {
    console.log('服务已启动');
 });