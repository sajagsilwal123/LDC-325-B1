const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs'); // encrypt and decrypt garna lai
const jwt = require('jsonwebtoken'); //token generated garna lai
const Team = require('../models/teamModel');
const upload = require('../middleware/upload')



//inserting product here
router.post('/team/insert', upload.single('Allimages'), function (req, res) {
    // console.log(req.file);
    if (req.file == undefined) {
        return res.status(400).json({ message: "Invalid" })
    }
    const name = req.body.name;
    const image = req.file.filename;
    const description = req.body.description;


    const teamData = new teamData({
        name: name,image: image,
        description: description
    })

    teamData.save().then(function (result) {
        res.status(201).json({ message:"Team has been added successfully!" });
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })

})

//PRODUCT DELETE
router.delete('/team/delete/:id', function (req, res) {

    const id = req.params.id;
    Team.deleteOne({ _id: pid })
        .then(function (result) {
            res.status(200).json({ message: "Team has been deleted", status: "true" })
        })
        .catch(function (err) {
            res.status(500).json({ message: err, status: "false" })
        })
})


//gets all info
router.get('/team/all', function (req, res) {
    Team.find().then(function(data){
        res.status(200).json({
            productData: data
        })
    }).catch(function (e) {
        res.status(500).json(e)
    })
})
router.get('/team/single/:id', function (req, res) {
    const id = req.params.id;
    Team.findOne({ _id: id }).then(function (data) {
        res.status(200).json({data})
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })
})





module.exports = router