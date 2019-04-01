var express = require('express');
var router = express.Router();
const Mongo = require('mongodb-curd')
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/getData', function(req, res, next) {
    Mongo.find("Guos", "list1", function(result) {
        if (!result) {
            res.send({
                code: 0,
                mes: "error"
            })
        } else {
            res.send({
                code: 1,
                mes: "success",
                data: result
            })
        }
    })
});

module.exports = router;