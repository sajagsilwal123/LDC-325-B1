let axios = require('axios');
exports.pay = function (amount, club, remarks) {
    let time = new Date().getTime()+'-'+Math.floor(1000 + Math.random() * 9000);
    let params = {
            psc: 0,
            pdc: 0,
            txAmt: 0,
            scd: "NP-ES-LEO",
            su: "http://localhost:3000/DonationSuccess",
            fu: "http://localhost:3000/DonationFailure"
        }
    params.pid = 'LDC325B1'+time;
    params.amt = amount;
    params.tAmt = amount;
    params.remarks= remarks;
    params.club = club;

    this.savePayment(params, 'initial');
    
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", "https://esewa.com.np/epay/main");

    for(var key in params) {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);
        form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
}

exports.savePayment = function (data, state) {
    if(state === 'initial') {
        axios.post("http://localhost:5000/payment/create", data)
        .then(
            (response) => {
                console.log(response)
            }
        )
        .catch(
            (err) => {
                alert(err)
            }
        )
    }
    if(state === 'success') {
        axios.post("http://localhost:5000/payment/update", data)
        .then(
            (response) => {
                console.log(response)
            }
        )
        .catch(
            (err) => {
                alert(err)
            }
        )
    }

}
