const express = require('express');
const router = express.Router();
const cekToken = require('../modules/security');

router.get("/", function (req, res) {
    console.log("hello");
    res.send("halo");
})

router.get("/userlog/:id", function (req, res) {
    if (cekToken.cekToken(req.headers['authorization'])) {
        mysqlConnection.query('SELECT * FROM user_log where userid = ?', [req.params.id], (err, rows) => {
            if (!err) {
                res.send(rows);
            } else {
                res.send(pesan.gagalfetch)
            }
        });
    }else {
        res.send(pesan.notAuthorized);
      }
})


router.get("/logout/:id", function (req, res) {
    if (cekToken.cekToken(req.headers['authorization'])) {
        mysqlConnection.query('UPDATE `user_log` SET `lastlogout` = NOW() WHERE userid = ?', [req.params.id], (err, rows) => {
            if (!err) {
                res.send(pesan.logoutSucces);
            } else {
                res.send(pesan.gagalfetch)
            }
        });
    }else {
        res.send(pesan.notAuthorized);
      }
})

router.post("/login", function (req, res) {
    let userid = req.body.userid;
    var password = req.body.password;
    if (req.body.userid) {
        mysqlConnection.query('SELECT * FROM user WHERE userid = ?', [userid], function (error, results) {
            if (error) {
                res.send(pesan.gagalfetch)
            } else {
                if (results.length > 0) {
                    if (results[0].password == password) {

                        var query1 = "UPDATE `user_log` SET `lastlogin` = NOW() WHERE userid = '" + req.body.userid + "'";
                        mysqlConnection.query(query1, function (error, results, fields) {
                            if (!error) {
                                console.log("Last Login Updated ");
                            }
                        });
                        console.log(results);
                        let userid = results[0].userid;
                        // let id = results[0].id;
                        let role = results[0].role;
                        let branchcode = results[0].branchcode;

                        const token = jwt.sign({
                            loggedIn: true
                        }, 'kuncirahasia', {
                            expiresIn: 86400 // expire dalam 24 jam
                        });
                        console.log("Token Generated : ", token);

                        let objUser = {
                            userid: userid,
                            role: role,
                            status: "ok",
                            branchcode: branchcode,
                            token: token
                        };

                        res.send(objUser);
                    } else {
                        res.send(pesan.loginFailed);
                    }
                } else {
                    res.send(pesan.unRegisteredUser);
                }
            }
        });
    }
});

module.exports = router;