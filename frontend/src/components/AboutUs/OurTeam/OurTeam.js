import React, {useState} from "react";
import { Table } from 'reactstrap';
let members = require('../../../helpers/district_board');

function OutTeam() {
    return (
        <div>
            <h1>District Board</h1>
                <Table bordered hover responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Position</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
            {members && (
                <>
                {members.members.map((member, i) => (
                    <>
                    <tr key={member.ids}>
                        <th scope="row">{member.ids}</th>
                        <td>{member.position}</td>
                        <td>{member.name}</td>
                        <td>{member.email}</td>
                    </tr>
                    </>
                ))}
                </>
            )}
            </tbody>
            </Table>
        </div>
    )
}

export default OutTeam;
