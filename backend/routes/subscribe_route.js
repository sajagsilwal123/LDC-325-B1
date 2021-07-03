
const express = require("express");

const router = express.Router();
const Subscribe = require('../models/subscribeModel')
const { updateOne } = require("../models/subscribeModel");


//inserting subscriber here
router.post('/subscribe/insert', function (req, res) {
    const fullname = req.body.fullname;
  const Email = req.body.email;

        const subscribe = new Subscribe({
        fullname:fullname, email: Email
        })
            subscribe.save().then(function (result) {
                res.status(200).json({ message: "You have subscribed our newsletter, thank you !!!" })
            }).catch(function (err) {
                res.status(201).json({ message: err })
                console.log(err)
            })
        })



//delete subscriber
router.delete('/subscribe/delete/:pid', function (req, res) {

    const pid = req.params.pid;
    Subscribe.deleteOne({ _id: pid })
        .then(function (result) {
            res.status(200).json({ message: "Subscriber deleted", status: "true" })
        })
        .catch(function (err) {
            res.status(500).json({ message: err, status: "false" })
        })
})

//update subscriber
router.put('/subscribe/update/:id', function (req, res) {
    const id = req.params.id
    const fullname =req.body.fullname
    const email = req.body.email


    Subscribe.updateOne({
        _id: id, email: email, fullname:fullname
        
    }
    ).then(function (result) {
        res.status(200).json({ message: "Subscriber has been updated" })
    }).catch(function (e) {
        res.status(500).json({ message: e })
    })

})


//gets all info
router.get('/subscribe/all', function (req, res) {
    Subscribe.find().then(function(data){
        res.status(200).json({
            productData: data
        })
    }).catch(function (e) {
        res.status(500).json(e)
    })
})




module.exports = router