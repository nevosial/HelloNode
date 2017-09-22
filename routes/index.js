var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/healthcheck', function(req, res){
  var hc_resp = { code : "200" , message : 'OK' };
  res.send(hc_resp);
});

var choicedb = [];

/*
router.get('/numberchoice/:num/:name', function(req, res){
  var numchoice = req.params.num;
  var nc_resp = {message: `Hey ${req.params.name} I like ${numchoice} too!`};
  res.send(nc_resp);
});
*/

router.post('/numberchoice/:name/:number', function(req, res){
  if(req.body.formfactor){
    console.log(req.body.formfactor);
  }
  else{
    console.log('No form factor.');  //will be op on the server.
  }

  if(req.params.name == "nev"){
  choicedb.push({name:`${req.params.name}`, number:`${req.params.number}`});
  var nc_resp = {message: `Hey ${req.params.name} I like ${req.params.number} too!`};
  res.send(nc_resp);
}
else{
  res.status(401).send('Only nev is authorized, you are not!');
}

});

router.get('/stats', function(req, res){
  //Log the info from request headers.
  var logvalue = req.headers['log'];     //search the header for type/name 'log'
  if(logvalue && logvalue == 'info'){     // if the log is of value 'info' then log to console.
    console.log("Request received for /stats");
    console.log(req.headers);   //just to verify all headers.
    //Use postman to create the header of {log : info} for GET request to /stat page.
  }

  //Managing Query string.  (select)
  var select = req.query.select;    //save select qs to var.

  if(choicedb.length != 0){
    var responseObject = choicedb;
    if(select && select == 'count'){   //if there is a QS and it is 'count'
      responseObject = {count:choicedb.length};
    }
  res.send(responseObject);
}
else{
  var responseObject = {error: '404' , message: 'The db is empty!'};
  if(select && select == 'count'){
    responseObject = {count:0};
  }

  res.status(404).send(responseObject);
}
});

module.exports = router;
