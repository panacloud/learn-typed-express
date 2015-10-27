/// <reference path="./../typings/tsd.d.ts" />
/**
 * Module dependencies.
 */
var chai = require('chai');
var supertest = require('supertest');
/**
 * Globals
 */
var expect = chai.expect;
var should = chai.should;
var api = supertest('http://localhost:3000');
/**
 * Testing Unit tests
 */
describe('Testing Unit Tests:', function () {
    describe('2 + 4', function () {
        it('should be 6', function (done) {
            expect(2 + 4).to.equals(6);
            done();
        });
        it('should not be 7', function (done) {
            expect(2 + 4).to.not.equals(7);
            done();
        });
    });
});
/**
 * API-level tests
 */
describe('API-level tests :', function () {
    describe('server working', function () {
        it('should be a user with name zia', function (done) {
            api.get('/api/user')
                .set("Accept", "application/json")
                .expect(200)
                .end(function (err, res) {
                expect(res.body).to.have.property("name");
                expect(res.body.name).to.not.equal(null);
                expect(res.body.name).to.equal("zia");
                done();
            });
        });
    });
});
