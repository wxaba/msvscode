 //01 导入 http 模块
 const http = require('http')
 //02 创建服务
 const server = http.createServer((request, response) => {
   //获取请求的方法
   var httpRequestMethod = request.method;
   //获取请求的URL 只有路径与查询字符串
   var httpRequestURL = request.url;
   //获取请求的http版本号
   var httpVersion = request.httpVersion;
   //获取请求头对象
   var requestHeaders = request.headers;
   //获取请求的host
   var requestHost = requestHeaders.host;

   response.setHeader('content-type','text/html;sharset=utf-8');
   response.end('dada'); //设置响应体，结束响应
   console.log(httpRequestMethod);
   console.log(httpRequestURL);
   console.log(httpVersion);
   console.log(requestHeaders);
   console.log(requestHost);
 });
 //03 监听端口，启动服务
 server.listen(9000, () => {
    console.log('服务已启动');
 });