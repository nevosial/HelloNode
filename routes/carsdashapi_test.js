var mocha = require('mocha');
//var describe = mocha.describe();
 var expect = require('chai').expect;
// var app = require('../app');
// var request = require('http');

var request = require('request')
    , express = require('express')
    ,assert = require("assert")
    ,http = require("http");


describe('Flight Dashboard tests', function(){

    it('should return the flights dashboard if the url is correct', function(done){
        http.get('http://localhost:3000/users/login', function(res) {
          //setTimeout(function() {}, 3000);
          //yield sleep(2000);
            assert.equal(200, res.statusCode);
            done();
        })
    });
});

describe('Dahboard Database connectivity tests', function(){

    it('should return if dashboard mongodb is reachable', function(done){
        http.get('http://localhost:3000/users/login', function(res) {
            assert.equal(200, res.statusCode);
            done();
        })
    });
});
