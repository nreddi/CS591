/*** Created by n8reddi for CS591 MEAN.***/

const express = require('express')
const router = express.Router()

// Initiate mongoose connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cs591/')
const db = mongoose.connection
db.once('open', function () {
    console.log('Connection successful.')
})

// Define schema as len
const Schema = mongoose.Schema
const StringSchema = new Schema({
    name: String,
    length: String
})
const StringLength = mongoose.model('StringLength', StringSchema)


// GET -- Fetch all strings
router.get('/', function (req, res, next) {
    StringLength.find({}, function (err, results) {
        res.json(results);
    })

})

// GET -- findOne, or add new string
router.get('/:_name', function (req, res, next) {
    let Stringname = req.params._name

    StringLength.findOne({name: Stringname}, function (err, result) {
        if(result == null) {
            const SomeString = new StringLength ( {name: Stringname, length: Stringname.length})
            SomeString.save(function(err) {
                if (err) {res.send(err)}
                else {res.send (SomeString)}
            })
        }
        else {res.json(result)}
    })
})

// POST -- findOne, or add new string
router.post('/', function(req, res, next) {
    let Stringname = req.body.name

    StringLength.findOne({name: Stringname}, function (err, result) {
        if(result == null) {
            const SomeString = new len ( {name: Stringname, length: Stringname.length})
            SomeString.save(function(err) {
                if (err) {res.send(err)}
                else {res.send (SomeString)}
            })
        }
        else {res.json(result)}
    })
})

// DELETE -- findOneAndRemove, or return error
router.delete('/:_name', function (req, res, next) {
    let Stringname = req.params._name

    StringLength.findOne({name: Stringname}, function (err, result) {
        if(result == null) {
            res.json({message: 'String not found.'})
        }
        else {
            StringLength.findOneAndRemove({name: Stringname}, function (err, result) {
                res.json({message: 'Success.'})
            })
        }
    })
})

module.exports = router;