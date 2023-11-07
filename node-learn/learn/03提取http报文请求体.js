 //01 导入 http 模块
 const http = require('http')
 //02 创建服务
 const server = http.createServer((request, response) => {
  //获取请求的方法
  let body='';
   request.on('data', chunk => {
    body += chunk;
   });

   request.on('end', () => {
    console.log(body);
    response.setHeader('content-type','text/html;sharset=utf-8');
    response.end('dada'); //设置响应体，结束响应
   });

 });
 //03 监听端口，启动服务
 server.listen(9000, () => {
    console.log('服务已启动');
 });