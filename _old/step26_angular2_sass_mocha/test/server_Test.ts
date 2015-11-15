/// <reference path="./../typings/tsd.d.ts" />


/**
 * Module dependencies.
 */
import chai = require('chai');
import supertest = require('supertest');

/**
 * Globals
 */

var expect = chai.expect;
var should = chai.should;
var api = supertest('http://localhost:3000');


/**
 * Testing Unit tests
 */
describe('Testing Unit Tests:', () => {

    describe('2 + 4', () => {
        it('should be 6', (done) => {
            expect(2+4).to.equals(6);
            done();
        });

        it('should not be 7', (done) => {
            expect(2+4).to.not.equals(7);
            done();
        });
    });
});

/**
 * API-level tests 
 */
describe('API-level tests :', () => {

    describe('server working', () => {
        it('should be a user with name zia', (done) => {
            api.get('/api/user')
            .set("Accept", "application/json")
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.have.property("name");
                expect(res.body.name).to.not.equal(null);
                expect(res.body.name).to.equal("zia");
                done();
            })
            
        });

        
    });
});