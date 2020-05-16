'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi BENGKELKU  ku berjalan gaes", res)
};

//menampilkan semua data montir
exports.tampilsemuamontir = function (req, res) {
    connection.query('SELECT * FROM t_montir', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data montir berdasarkan id
exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_montir WHERE id_montir = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//Menambahkan data Montir
exports.tambahmontir = function (req, res) {
    var id_montir = req.body.id_montir;
    var Nama_montir = req.body.Nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('INSERT INTO t_montir(id_montir,Nama_montir,harga_perjam)VALUES(?,?,?)',
        [id_montir, Nama_montir, harga_perjam],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

//Mengubah data berdasarkan ID
exports.ubahMontir = function (req, res) {
    var id_montir = req.body.id_montir;
    var Nama_montir = req.body.Nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('UPDATE t_montir SET Nama_montir=?, harga_perjam=? WHERE id_montir=?', [Nama_montir, harga_perjam, id_montir],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("BERHASIL MENGUBAH DATA MONTIR", res)
            }
        });

};

//Menghapus Data Berdasarkan ID
exports.hapusMontir = function (req, res) {
    var id_montir = req.body.id_montir;
    connection.query('DELETE FROM t_montir WHERE id_montir=?', [id_montir],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("BERHASIL MENGHAPUS DATA MONTIR", res)
            }
        });

};