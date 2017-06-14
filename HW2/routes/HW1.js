/**
 * Created by n8reddi on 6/6/17.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('HW1 test');
});

//using the GET method
router.get('/:name', function (req, res, next) {        //takes the input of the name provided
    let theName = req.params.name
    res.json({string: theName, length: theName.length})
})

//using the Post method
router.post('/', function (req, res, next) {
    res.json(req.body)
})

module.exports = router;