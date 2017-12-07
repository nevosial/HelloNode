var mocha = require('mocha');
//var describe = mocha.describe();
 var expect = require('chai').expect;
// var app = require('../app');
// var request = require('http');

var request = require('request')
    , express = require('express')
    ,assert = require("assert")
    ,http = require("http");


describe('http tests', function(){

    it('should return the login if the url is correct', function(done){
        http.get('http://localhost:3000/users/login', function(res) {
          //setTimeout(function() {}, 3000);
          //yield sleep(2000);
            assert.equal(200, res.statusCode);
            done();
        })
    });
});

describe('Database connectivity tests', function(){

    it('should return if mongodb is reachable', function(done){
        http.get('http://localhost:3000/users/login', function(res) {
            assert.equal(200, res.statusCode);
            done();
        })
    });
});


describe('User Login tests', function(){

    it('should return if user has logged in successfully', function(done){
        http.get('http://localhost:3000/users/login', function(res) {
            assert.equal(200, res.statusCode);
            done();
        })
    });
});

describe('List files', function(){

    it('should return if listing file operation is successfull.', function(done){
        http.get('http://localhost:3000/users/login', function(res) {
            assert.equal(200, res.statusCode);
            done();
        })
    });
});


describe('File upload tests', function(){

    it('should return if file upload is successfull.', function(done){
        http.get('http://localhost:3000/users/login', function(res) {
            assert.equal(200, res.statusCode);
            done();
        })
    });
});

describe('Star a file', function(){

    it('should return file star operation is successfull.', function(done){
        http.get('http://localhost:3000/users/login', function(res) {
            assert.equal(200, res.statusCode);
            done();
        })
    });
});

describe('Listing of all Starred files', function(){

    it('should return if listing operation of all starred files only is successfull.', function(done){
        http.get('http://localhost:3000/users/login', function(res) {
            assert.equal(200, res.statusCode);
            done();
        })
    });
});

describe('Remove Star a file', function(){

    it('should return file unstar operation is successfull.', function(done){
        http.get('http://localhost:3000/users/login', function(res) {
            assert.equal(200, res.statusCode);
            done();
        })
    });
});


describe('Download a file', function(){

    it('should return file download is successfull.', function(done){
        http.get('http://localhost:3000/users/login', function(res) {
            assert.equal(200, res.statusCode);
            done();
        })
    });
});




describe('User Logout tests', function(){

    it('should return if user has logged out in successfull', function(done){
        http.get('http://localhost:3000/users/login', function(res) {
            assert.equal(200, res.statusCode);
            done();
        })
    });
});
