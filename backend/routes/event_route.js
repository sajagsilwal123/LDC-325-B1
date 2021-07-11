const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs'); // encrypt and decrypt garna lai
const jwt = require('jsonwebtoken'); //token generated garna lai
const upload = require('../middleware/upload')
const event = require('../models/eventModel');

//creating event here
router.post('/event/create', upload.single('Allimages'), function (req, res) {
    if (req.file == undefined) {
        return res.status(400).json({ message: "Invalid file format" })
    }
    const eventName = req.body.eventName;
    const eventFee = req.body.eventFee;
    const eventImage = req.file.filename;
    const eventDescription = req.body.eventDescription;

    const me = new event({
        eventName: eventName, eventFee: eventFee, eventImage: eventImage,
        eventDescription: eventDescription
    })

   me.save().then(function (result) {
        res.status(201).json({ message: "Event has been created successfully !!!" });
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })

})

//event delete
router.delete('/event/delete/:id', function (req, res) {

    const id = req.params.id;
    event.deleteOne({ _id: id })
        .then(function (result) {
            res.status(200).json({ message: "Event has been deleted successfully !!!", status: "true" })
        })
        .catch(function (err) {
            res.status(500).json({ message: err, status: "false" })
        })
})

//event update
router.put('/event/update/:id',function (req, res) {
    const id = req.params.id;
    const eventName = req.body.eventName
    const eventFee = req.body.eventFee
    const eventImage = req.body.eventImage
    const eventDescription = req.body.eventDescription
    
  event.updateOne({_id: id}, {eventName: eventName}).then(function (result) {
        res.status(200).json({ message: "event has been updated" }) 
    })
        event.updateOne({_id: id}, {eventFee: eventFee}).then(function (result) {
            res.status(200).json({ message: "Event has been updated" })
        })


            event.updateOne({_id: id}, {eventImage: eventImage}).then(function (result) {
                res.status(200).json({ message: "Event has been updated" })
            })
                event.updateOne({_id: id}, {eventDescription: eventDescription}).then(function (result) {
                    res.status(200).json({ message: "Event has been updated" })
                }).catch(function (e) {
        res.status(500).json({ message: e, status:false })
    })
})



//gets all info
router.get('/event/all', function (req, res) {
    event.find().then(function(data){
        console.log(data)
        res.status(200).json({
            eventData: data
        })
    }).catch(function (e) {
        res.status(500).json(e)
    })
})


//to show only single element
router.get('/event/single/:id', function (req, res) {
    const id = req.params.id;
    event.findOne({ _id: id }).then(function (data) {
        res.status(200).json({data})
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })
})



module.exports = router