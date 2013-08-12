'use strict';

var handlebars = require('handlebars');
var util = require('util');


function bindEngine(Mincer) {
    var HbsEngine = Mincer.HbsEngine = function HbsEngine() {
        Mincer.Template.apply(this, arguments);
    };

    util.inherits(HbsEngine, Mincer.Template);

    HbsEngine.prototype.evaluate = function evaluate() {
        return util.format('"%s"', handlebars.precompile(this.data.trimLeft().trimRight()).replace(/"/g, '\\"'));
    };

    Mincer.registerEngine('.hbs', Mincer.HbsEngine);
}

module.exports = bindEngine;
