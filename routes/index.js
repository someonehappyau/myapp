var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/info',function(req,res){
	res.render('info',{pam1:111,pam2:'abcdefg',pamlist:['aa','bb','cc'], pamobj:{a:1,b:'2afdaf'}});
});

module.exports = router;
