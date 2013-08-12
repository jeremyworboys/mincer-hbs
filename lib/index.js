'use strict';

var handlebars = require('handlebars');
var inherit = require('util').inherits;


function bindEngine(Mincer) {
    var HbsEngine = Mincer.HbsEngine = function HbsEngine() {
        Mincer.Template.apply(this, arguments);
    };

    inherit(HbsEngine, Mincer.Template);

    HbsEngine.prototype.evaluate = function evaluate() {
        return handlebars.precompile(this.data.trimRight());
    };

    Mincer.registerEngine('.hbs', Mincer.HbsEngine);
}

module.exports = bindEngine;
