var express = require('express');
var router = express.Router();
var request=require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/info',function(req,res){
	request.get('http://localhost:3011/mc/model/cbr600',function(err,response,body){
		if (!err && response.statusCode==200){
			console.log(body);
			console.log(JSON.parse(body));
			res.render('info',{pamret:JSON.parse(body),pam1:111,pam2:'abcdefg',pamlist:['aa','bb','cc'], pamobj:{a:1,b:'2afdaf'}});
		}
	});
		
});

module.exports = router;
