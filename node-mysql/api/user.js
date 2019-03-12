const express = require('express');
const router = express.Router();


router.get("/", function (req, res) {
    console.log("hello");
    res.send("halo");
})

router.post("/login", function (req, res) {
    console.log("user login");
    console.log(req.body.userid + req.body.password)
    //jika inputan userid tidak kosong
    var userid = req.body.userid;
    var password = req.body.password;
    if (req.body.userid) {
        mysqlConnection.query('SELECT * FROM user WHERE userid = ?', [userid], function (error, results, fields) {
            if (error) {
                // console.log("error ocurred",error);
                res.send(pesan.gagalfetch)
            } else {
                // console.log('The solution is: ', results);
                if (results.length > 0) {
                    if (results[0].password == password) {

                        let userid = results[0].userid;
                        let id = results[0].id;
                        let role = results[0].role;


                        const token = jwt.sign({
                            loggedIn: true
                        }, 'kuncirahasia', {
                            expiresIn: 86400 // expire dalam 24 jam
                        });
                        console.log(token);

                        let objUser = {
                            id: id,
                            userid: userid,
                            role: role,
                            isLogin: true,
                            status: "ok",
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