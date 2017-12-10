var mocha = require('mocha');
//var describe = mocha.describe();
 var expect = require('chai').expect;
 var app = require('../app');
 var request = require('http');

var request = require('request')
    , express = require('express')
    ,assert = require("assert")
    ,http = require("http");


describe('Login tests', function(){

    it('should return if the login is successful based on params', function(done){
        http.get('http://localhost:3000/users/login', function(res) {
          //setTimeout(function() {}, 3000);
          //yield sleep(2000);
            assert.equal(200, res.statusCode);
            done();
        })
    });
});
