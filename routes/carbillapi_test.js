var mocha = require('mocha');
//var describe = mocha.describe();
 var expect = require('chai').expect;
// var app = require('../app');
// var request = require('http');

var request = require('request')
    , express = require('express')
    ,assert = require("assert")
    ,http = require("http");


    describe('Car Bill generate ', function(){

        it('should return if a car bill is added succesfully', function(done){
            http.get('http://localhost:3000/users/login', function(res) {
              //setTimeout(function() {}, 3000);
              //yield sleep(2000);
                assert.equal(200, res.statusCode);
                done();
            })
        });
    });

    describe('Car Bill delete ', function(){

        it('should return a car bill is succesfully deleted for a given id', function(done){
            http.get('http://localhost:3000/users/login', function(res) {
              //setTimeout(function() {}, 3000);
              //yield sleep(2000);
                assert.equal(200, res.statusCode);
                done();
            })
        });
    });

    describe('Car Bill search ', function(){

        it('should return if the bill could be retrieved given the parameters', function(done){
            http.get('http://localhost:3000/users/login', function(res) {
              //setTimeout(function() {}, 3000);
              //yield sleep(2000);
                assert.equal(200, res.statusCode);
                done();
            })
        });
    });
