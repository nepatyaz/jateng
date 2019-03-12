const express = require('express');
const router = express.Router();
const cekToken = require('../modules/security');

router.get("/", function (req, res) {
    console.log("hello");
    res.send("halo");
})

// router.get("/userlog/:id", function (req, res) {
//     if (cekToken.cekToken(req.headers['authorization'])) {
//         mysqlConnection.query('SELECT * FROM userlog where userid = ?', [req.params.id], (err, rows) => {
//             if (!err) {
//                 res.send(rows);
//             } else {
//                 res.send(pesan.gagalfetch)
//             }
//         });
//     }else {
//         res.send(pesan.notAuthorized);
//       }
// })


router.get("/getbranch/:id", function (req, res) {
    if (cekToken.cekToken(req.headers['authorization'])) {
        mysqlConnection.query('SELECT * FROM `master_branch` WHERE `branchcode`= ?', [req.params.id], (err, rows) => {
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


module.exports = router;