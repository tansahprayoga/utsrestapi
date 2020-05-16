'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuamontir);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);
    app.route('/tambah')
        .post(jsonku.tambahmontir);
    app.route('/ubah')
        .put(jsonku.ubahMontir);
    app.route('/hapus')
        .delete(jsonku.hapusMontir);
}