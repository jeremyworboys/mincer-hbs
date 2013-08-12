'use strict';

var Mincer = require('Mincer');
require('../')(Mincer);


module.exports = function environment() {
    var env = new Mincer.Environment(__dirname);

    env.appendPath(__dirname + '/fixtures');

    env.ContextClass.defineAssetPath(function (pathname, options) {
        var asset = env.findAsset(pathname, options);
        return !asset ? null : ('/assets/' + asset.digestPath);
    });

    return env;
};
