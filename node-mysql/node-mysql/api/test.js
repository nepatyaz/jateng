const express = require('express');
const router = express.Router();

//get all employess
router.get('/employees', (req, res) => {
    mysqlConnection.query('SELECT * FROM employee', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log("bad query" + err);
        }
    });
});

//dapatkan semua data tabel user
router.get('/user', (req, res) => {
    mysqlConnection.query('SELECT * FROM user', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log("Query gagal, terjadi kesalahan" + err);
        }
    });

});



//mendapatkan data user berdasarkan inputan get id
router.get('/users/:id', (req, res) => {
    mysqlConnection.query('SELECT user.password, user.userid, user.role, userlog.login_terakhir, userlog.logout_terakhir, userlog.status FROM userlog  INNER JOIN user ON ( userlog.userid = user.userid) WHERE user.userid =  ? ', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log("Query gagal, terjadi kesalahan" + err);
        }
    });

});

//insert data employes
router.post("/user/", function (req, res) {
    console.log(req.body.userid + req.body.password)
    //jika inputan userid tidak kosong
    var userid = req.body.userid;
    var password = req.body.password;
    if (req.body.userid) {
        mysqlConnection.query('SELECT * FROM user WHERE userid = ?', [userid], function (error, results, fields) {
            if (error) {
                // console.log("error ocurred",error);
                res.send({
                    "code": 400,
                    "failed": "error ocurred"
                })
            } else {
                // console.log('The solution is: ', results);
                if (results.length > 0) {
                    if (results[0].password == password) {
                        res.send({
                            "code": 200,
                            "status": "OK",
                            "message": "login sucessfull",
                            "data": results
                        });
                    } else {
                        res.send({
                            "code": 204,
                            "status": "BAD",
                            "message": "USER ID atau Password tidak salah! "
                        });
                    }
                } else {
                    res.send({
                        "code": 204,
                        "status": "BAD",
                        "message": "User ID Tidak Terdaftar!"
                    });
                }
            }
        });
    }
});


//insert data employes
router.post("/test", function (req, res) {

    var deviceid = req.body.DeviceName;
    var func = req.body.Function;
    //console.log(deviceid);
    //console.log(func);
    console.log(JSON.stringify(req.body));
    res.send({
        "code": 200
    })
});





//get all status
router.get('/status', (req, res) => {
    mysqlConnection.query('SELECT * FROM status', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log("bad query" + err);
        }
    });
});

//get all ktrluser
router.get('/ktrluser', (req, res) => {
    mysqlConnection.query('SELECT * FROM ktrluser', (err, rows, fields) => {
        if (!err) {
            console.log(rows)
            res.send(rows);
        } else {
            console.log("bad query" + err);
        }
    });
});


//get all comments
router.get('/comments', (req, res) => {
    mysqlConnection.query('SELECT * FROM mytable', (err, rows, fields) => {
        if (!err) {
            console.log(rows)
            res.send(rows);
        } else {
            console.log("bad query" + err);
        }
    });
});


//get an comments
router.get('/commentsData', (req, res) => {

    console.log("size  : ", req.query.size);
    console.log("page : ", req.query.page);
    console.log("limit : ", req.query.limit);
    var query1 = "select * from mytable LIMIT " + req.query.limit + " offset " + req.query.page;
    console.log(query1);


    mysqlConnection.query(query1, (err, rows, fields) => {
        if (!err) {
            console.log(rows)
            res.send(rows);
        } else {
            console.log("bad query" + err);
        }
    });

});

//count data comments
router.get('/comments/jumlah', (req, res) => {

    var query1 = "SELECT COUNT(id) as total FROM mytable";


    mysqlConnection.query(query1, (err, rows, fields) => {
        if (!err) {
            console.log(rows)
            res.send(rows);
        } else {
            console.log("bad query" + err);
        }
    });

});

//count data comments
router.get('/api/jumlahtest', (req, res) => {

    var query1 = "SELECT COUNT(id) as total FROM table_test";


    mysqlConnection.query(query1, (err, rows, fields) => {
        if (!err) {
            console.log(rows)
            res.send(rows);
        } else {
            console.log("bad query" + err);
        }
    });

});

//get an comments
router.get('/api/testdata', (req, res) => {

    console.log("start  : ", req.query.start);
    console.log("page : ", req.query.page);
    console.log("limit : ", req.query.limit);
    var query1 = "select * from table_test LIMIT " + req.query.limit + " offset " + req.query.start;
    console.log(query1);


    mysqlConnection.query(query1, (err, rows, fields) => {
        if (!err) {
            console.log(rows)
            res.send(rows);
        } else {
            console.log("bad query" + err);
        }
    });

});


//count data test
router.get('/api/testcount', (req, res) => {
    console.log("filter : ", req.query.filter);
    var query1 = "SELECT COUNT(id) as total FROM table_test WHERE first_name LIKE '%" + req.query.filter + "%'";


    mysqlConnection.query(query1, (err, rows, fields) => {
        if (!err) {
            console.log(rows)
            res.send(rows);
        } else {
            console.log("bad query" + err);
        }
    });

});

//searching
router.get('/api/testsearch', (req, res) => {

    console.log("start  : ", req.query.start);
    console.log("page : ", req.query.page);
    console.log("limit : ", req.query.limit);
    console.log("filter : ", req.query.filter);
    var jumlah;
    var query1 = "SELECT * FROM `table_test` WHERE first_name LIKE '%" + req.query.filter + "%' LIMIT 100";
    var query2 = "SELECT count(id)as total FROM `table_test` WHERE first_name LIKE '%" + req.query.filter + "%'";
    console.log(query1);

    mysqlConnection.query(query2, (err, rows, fields) => {
        if (!err) {
            jumlah = rows;
        } else {
            console.log("bad query" + err);
        }
    });

    mysqlConnection.query(query1, (err, rows, fields) => {
        if (!err) {
            var output = rows.concat(jumlah);
            console.log(output);
            var testing = {
                jumlah,
                rows
            };
            //console.log("jumlahh : ", finalobj)
            //console.log(jumlah);
            res.send(output);
        } else {
            console.log("bad query" + err);
        }
    });

});






//get an ktrluser
router.get('/view_ktrluser/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM ktrluser WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            console.log(rows)
            res.send(rows);
        } else {
            console.log("bad query" + err);
        }
    });

});

//mendapatkan data user berdasarkan inputan get id
router.get('/ktrluser/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM `ktrluser` WHERE `ktrluser`.`UserId` =  ? ', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.send('ok');
        } else {
            console.log("Query gagal, terjadi kesalahan" + err);
        }
    });

});




//get an employess
router.get('/employees/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM employee WHERE EmpId = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log("bad query" + err);
        }
    });

});

//hapus data employees
router.delete('/employees/:id', (req, res) => {
    mysqlConnection.query('delete from employee WHERE EmpId = ?', [req.params.id], (err, rows, fields) => {
        if (!err) {
            res.send('penghapusan berhasil');
        } else {
            console.log("bad query" + err);
        }
    });
});

//insert data employes
router.post('/employees', (req, res) => {
    let emp = req.body;
    var sql = "SET @EmpId=?; SET @Name=?; SET @EmpCode=?; SET @Salary=?; CALL `addEditProsedur`(@EmpId, @Name, @EmpCode, @Salary);";
    mysqlConnection.query(sql, [emp.EmpId, emp.Name, emp.EmpCode, emp.Salary], (err, rows, fields) => {
        if (!err) {
            rows.forEach(element => {
                if (element.constructor == Array) {
                    res.send('inserted employeeid : ' + element[0].EmpId);

                }
            });
        } else {
            console.log("bad query" + err);
        }
    });
});

//update data employess
router.put('/employees', (req, res) => {
    let emp = req.body;
    var sql = "SET @EmpId=?; SET @Name=?; SET @EmpCode=?; SET @Salary=?; CALL `addEditProsedur`(@EmpId, @Name, @EmpCode, @Salary);";
    mysqlConnection.query(sql, [emp.EmpId, emp.Name, emp.EmpCode, emp.Salary], (err, rows, fields) => {
        if (!err) {
            res.send('Update Sukses ');
        } else {
            console.log("bad query" + err);
        }
    });
});


//test data
//app.post('/test', (req, res) => {
//var data = req.body;
//console.log(req.body.deviceid); 
//res.send('ok ');
//});
module.exports = router;