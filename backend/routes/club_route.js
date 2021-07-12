const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs'); // encrypt and decrypt garna lai
const jwt = require('jsonwebtoken'); //token generated garna lai
const Club = require('../models/clubModel');
const upload = require('../middleware/upload')

router.post('/activity/insert', upload.single('Allimages'), function (req, res) {
    // if (req.file == undefined) {
    //     return res.status(400).json({ message: "Invalid" })
    // }
    const name = req.body.name;
    // const image = req.file.filename || '';
    const contactPerson = req.body.contactPerson;
    const contactNumber = req.body.contactNumber;
    const email = req.body.email;
    const members = req.body.members;
    const address = req.body.address;

    const activitydata = new Club({
        name: name,
        contactPerson: contactPerson, contactNumber: contactNumber, email: email, members:members, address: address
    })

    activitydata.save().then(function (result) {
        res.status(201).json({ message:"Club has been added successfully!" });
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })

})

//PRODUCT DELETE
router.delete('/activity/delete/:id', function (req, res) {

    const id = req.params.id;
    Club.deleteOne({ _id: pid })
        .then(function (result) {
            res.status(200).json({ message: "Club has been deleted", status: "true" })
        })
        .catch(function (err) {
            res.status(500).json({ message: err, status: "false" })
        })
})

//TODO: Need to refactor
router.put('/activity/update/:id', function (req, res) {
    const id = req.params.id;
    const topic = req.body.topic
    const image =req.body.image
    const description = req.body.description


    Club.updateOne({
        _id: id, topic: topic
    }).then(function (result) {
        res.status(200).json({ message: "Club has been updated" })
        Club.updateOne({
            _id: id, image: image
        }).then(function (result) {
            res.status(200).json({ message: "Club has been updated" })
    })
    Club.updateOne({
        _id: id, description: description
    }).then(function (result) {
        res.status(200).json({ message: "Club has been updated" })
}).catch(function (e) {
        res.status(500).json({ message: e })
    })

})
})



//gets all info
router.get('/message/all/:page', function (req, res) {
    Club.paginate({}, {  page: req.params.page || 1, limit: 50, sort: { createdAt: 1 }, }, function(err, result) {
        res.status(200).json({
            clubData: result
        })
    }).catch(function (e) {
        res.status(500).json(e)
    })
})
router.get('/message/single/:id', function (req, res) {
    const id = req.params.id;
    Club.findOne({ _id: id }).then(function (data) {
        res.status(200).json({data})
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })
})





module.exports = router