import React from "react";

import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import {ThemeConsumer} from "react-bootstrap/ThemeProvider";

const AdminTable = (props) => {
    const tableStyle = {
        backgroundColor: 'pink',
        padding: '2rem'
    }

    return (
        <Container fluid >
            <Container style={tableStyle}>User Management</Container>
            <Table responsive="sm">
                <thead>
                <tr>
                    {props.headers.map(elements => (
                        <th>{elements}</th>
                    ))}

                </tr>
                </thead>
                <tbody>
                {props.data.map(data => (
                    <tr>
                        <td>{data}</td>
                    </tr>
                ))}
                </tbody>

            </Table>
        </Container>
    );
};

export default AdminTable;
