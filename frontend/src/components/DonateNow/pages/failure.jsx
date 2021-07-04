import React from 'react'
import {Row, Col, Alert } from 'reactstrap';
export default function DonationSuccess() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const oid = params.get('oid');
    const amt = params.get('amt');
    const refId = params.get('refId');

    return (
        <Row>
            <Col md="6" lg="6">
                <div class="container">
                    <Alert color="warning" className="mb-0">
                        <h4 className="alert-heading">Payment Failed!</h4>
                        Please check your eSewa first to confirm the payment has failed and retry.
                    </Alert>
                    <p className="text-muted mt-0 pt-0">
                        <small>* This page is for information purpose only, check your eSewa for any kind of verification.</small>
                    </p>
                </div>
            </Col>
        </Row>
    );
}