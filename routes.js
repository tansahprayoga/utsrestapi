'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilsemuamontir')
        .get(jsonku.tampilsemuamontir);

        app.route('/tampilmontirberdasarkanid/:id')
        .get(jsonku.tampilmontirberdasarkanid);
}