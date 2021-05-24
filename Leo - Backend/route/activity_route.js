const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs'); // encrypt and decrypt garna lai
const jwt = require('jsonwebtoken'); //token generated garna lai
const Activity = require('../models/activityModel');
const upload = require('../middleware/upload')



//inserting product here
router.post('/activity/insert', upload.single('Allimages'), function (req, res) {
    // console.log(req.file);
    if (req.file == undefined) {
        return res.status(400).json({ message: "Invalid" })
    }
    const topic = req.body.topic;
    const image = req.file.filename;
    const description = req.body.description;


    const activitydata = new activityData({
        topic: topic,image: image,
        description: description
    })

    activitydata.save().then(function (result) {
        res.status(201).json({ message:"Activity has been added successfully!" });
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })

})

//PRODUCT DELETE
router.delete('/activity/delete/:id', function (req, res) {

    const id = req.params.id;
    Activity.deleteOne({ _id: pid })
        .then(function (result) {
            res.status(200).json({ message: "Activity has been deleted", status: "true" })
        })
        .catch(function (err) {
            res.status(500).json({ message: err, status: "false" })
        })
})

//PRODUCT UPDATE
router.put('/activity/update/:id', function (req, res) {
    const id = req.params.id;
    const topic = req.body.topic
    const image =req.body.image
    const description = req.body.description


    Activity.updateOne({
        _id: id, topic: topic
    }).then(function (result) {
        res.status(200).json({ message: "Activity has been updated" })
        Activity.updateOne({
            _id: id, image: image
        }).then(function (result) {
            res.status(200).json({ message: "Activity has been updated" })
    })
    Activity.updateOne({
        _id: id, description: description
    }).then(function (result) {
        res.status(200).json({ message: "Activity has been updated" })
}).catch(function (e) {
        res.status(500).json({ message: e })
    })

})
})



//gets all info
router.get('/message/all', function (req, res) {
    Activity.find().then(function(data){
        res.status(200).json({
            productData: data
        })
    }).catch(function (e) {
        res.status(500).json(e)
    })
})
router.get('/message/single/:id', function (req, res) {
    const id = req.params.id;
    Activity.findOne({ _id: id }).then(function (data) {
        res.status(200).json({data})
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })
})





module.exports = router