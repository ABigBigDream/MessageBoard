const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const swig = require('swig');
const app = express();

//swig模板配置
app.engine('html', swig.renderFile);
app.set('views', './server/views');
app.set('view engine', 'html');
swig.setDefaults({
    cache:false
})


//第三方中间件的配置
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//静态资源的访问
app.use('/public', express.static(__dirname+'/public'));


//自定义路由模块的导入
require('./server/router/route')(app);


//服务器的连接
app.listen(8080, ()=>{
    console.log('服务器启动成功');
});
//数据库的连接
mongoose.connect('mongodb://localhost:27017/blog', {useMongoClient: true})
.on('open', (db)=>{
    console.log('数据库连接成功');
})
.on('error', (error)=>{
    console.log('数据库连接出现错误');
})
