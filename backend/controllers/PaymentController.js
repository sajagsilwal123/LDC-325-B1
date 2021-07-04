let PaymentModel = require('../models/paymentModel');
exports.create = async (data) => {
    try {
        let update = {};

        for (const [key, value] of Object.entries(data)) {
            update[key] = value;
        }
        let doc = new PaymentModel(update);
        doc.save(function(err, doc) {
            if (err) return console.error(err);
            console.log("Document inserted succussfully!");
        });
    
        return true;
    } catch (error) {
        return res.status(500).json({ error: true, message: error.message });
    }
}

exports.update = async (data) => {
    try {
        let d = await PaymentModel.findOne({pid: data.oid});
        
        if(d) {
            let dd = await PaymentModel.update({ _id: d._id }, { refId: data.refId }).exec();
        }
        
        return true;
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: true, message: error.message });
    }
}