'use strict';

var chai = require('chai');
var expect = chai.expect;

chai.Assertion.includeStack = true;


describe('Mincer HBS', function () {
    var env = require('./environment')();

    it('should compile to a JS function', function () {
        var asset = env.findAsset('template');

        expect(asset.toString().match(/this\.JST/)).to.be.ok;
        expect(asset.toString().match(/helpers\['if']\.call/)).to.be.ok;
    });

});
