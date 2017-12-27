let Blog = require('../db/message');
module.exports = function(app) {

    function show(res) {
        Blog.find({}, (err, db)=>{
            if(!err){
                res.render('index', {
                    data:db
                });
            }
        });
    }

    //路由配置
    app.get('/', (req, res, next)=>{
        show(res);
    });
    //form表单post提交的路由
    app.post('/save', (req, res, next)=>{
        let obj = {
            author: req.body.author,
            title: req.body.title,
            content: req.body.content
        }
        new Blog(obj).save((err, db)=>{
            if(err) {
                console.log('出错')
            }
        });
        
        res.send({
            status:200,
            message: '发布成功'
        });
    });
    //删除留言
    app.get('/delete', (req, res, next)=>{
        // console.log(req.query);  //{ id: '5a29010d2ba92218283144d2' }
        let id = req.query.id; 
        Blog.findOneAndRemove({_id:id}, (err, db)=> {
            if(err) {
                console.log('删除出错');
            }
        });
       show(res);
    })
    
};