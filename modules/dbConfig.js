//file konfigurasi database mysql
const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'bank_jateng',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Koneksi OK");
    } else if (err) {
        console.log("Koneksi Gagal : " + JSON.stringify(err));
    }
});

module.exports = mysqlConnection;