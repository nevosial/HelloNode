var express = require('express');
var router =  express.Router();

router.get('/errorcount', function(req, res){
  //var ec = {message:"Error Count" , value:"0"}
  res.send({erroCount:0});
});

module.exports = router;
