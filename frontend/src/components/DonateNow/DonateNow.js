import React from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col, Card, CardBody} from 'reactstrap';
let paymentHelper = require('../../helpers/payment_helper');

export default function DonateNow() {
  let amount
  let remarks = ''
  let club = '';

  function handleChange(e) {
    if(e.target.id === 'amount')
      amount = e.target.value;
    if(e.target.id === 'remarks')
      remarks = e.target.value;
    if(e.target.id === 'club')
      club = e.target.value;
      console.log(amount)
  }

  return (
    <div>
      <h3>Pay with eSewa</h3> <br/>
      <Card>
        <CardBody>
          <FormGroup>
            <Label for="amount">Amount</Label>
              <Input id="amount" name="tAmt" type="number" onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="club">Club/Person</Label>
              <Input id="club" name="club" type="text" onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="remarks">Remarks</Label>
              <Input id="remarks" name="remarks" type="text" onChange={handleChange} />
            </FormGroup>
            <br/>
            <Button onClick={() => paymentHelper.pay(amount, club, remarks)}>Pay</Button>
        </CardBody>
        <br/>
      </Card>
    <br/>
    </div>
  );
} 