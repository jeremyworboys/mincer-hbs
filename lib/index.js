'use strict';

var handlebars = require('handlebars');
var util = require('util');


function bindEngine(Mincer) {
    var HbsEngine = Mincer.HbsEngine = function HbsEngine() {
        Mincer.Template.apply(this, arguments);
    };

    util.inherits(HbsEngine, Mincer.Template);

    HbsEngine.prototype.evaluate = function evaluate() {
        var ast, compiled;

        ast = handlebars.parse(this.data);
        compiled = handlebars.precompile(ast, {});
        compiled = 'Handlebars.template(' + compiled + ')';

        return compiled;
    };

    Mincer.registerEngine('.hbs', Mincer.HbsEngine);
}

module.exports = bindEngine;
