import React from 'react'
import {Row, Col, Alert } from 'reactstrap';
let paymentHelper = require('../../../helpers/payment_helper');

export default function DonationSuccess() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    let data = {};
    data.oid = params.get('oid');
    data.amt = params.get('amt');
    data.refId = params.get('refId');

    paymentHelper.savePayment(data, 'success');
    return (
        <Row>
            <Col md="6" lg="6">
                <div class="container">
                    <Alert color="success" className="mb-0">
                        <h4 className="alert-heading">Payment Successful!</h4>
                        {((data.refId)? 'Esewa Transaction: '+data.refId : '')}
                        <br/>
                        {((data.amt)? 'Amount: '+data.amt : '')}
                        <br/>
                        {((data.oid)? 'System Id: '+data.oid : '')}
                        
                        <hr />
                        <p className="mb-0">
                            Thanks for your support!
                        </p>
                    </Alert>
                    <p className="text-muted mt-0 pt-0">
                        <small>* This page is not intended to be used as proof of payment.</small>
                    </p>
                </div>
            </Col>
        </Row>
    );
}