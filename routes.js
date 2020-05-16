'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilsemuamontir')
        .get(jsonku.tampilsemuamontir);

        app.route('/tampilmontirberdasarkanid/:id')
        .get(jsonku.tampilmontirberdasarkanid);
        app.route('/tampilsemuasparepart')
        .get(jsonku.tampilsemuasparepart);
        app.route('/tampilsparepartbyid/:id')
        .get(jsonku.tampilsparepartberdasarkanid);
}