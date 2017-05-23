var expect = require('chai').expect;
var countryService = require('../app/countryService.js');

describe('country service', function(){
    describe('fetch countries', function(){        
        it('fetches all countries', function(done){ 
            var countries;           
            countryService.getAllCountires(function(ct)
            {
                countries = ct; 
                expect(countries).to.have.lengthOf(249);                           
                done();                
            });            
        });
    });

    describe('fetch states', function(){        
        it('fetches all state for Country', function(done){ 
            var states;           
            countryService.getAllStates('USA',function(ct)
            {
                states = ct; 
                expect(states).to.have.lengthOf(56);                           
                done();                
            });            
        });
    });

    describe('fetch states', function(){        
        it('when country code is not valid', function(done){ 
            var states;           
            countryService.getAllStates('UIO',function(ct)
            {
                states = ct; 
                expect(states).to.have.lengthOf(0);                           
                done();                
            });            
        });
    });
});