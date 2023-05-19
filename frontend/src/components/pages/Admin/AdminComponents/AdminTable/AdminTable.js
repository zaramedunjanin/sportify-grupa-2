import React from "react";
import axios from "axios";
import styles from "./AdminTable.module.scss"
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import CustomButton from "../../../../atoms/Buttons/CustomButton";
import Row from "react-bootstrap/Row";

const AdminTable = (props) => {

    let page = props.page;
    let currentData = {
        data: []
    };
    function getUserList() {
        axios.get('http://127.0.0.1:8000/administrator/tables/users')
            .then(res => {
                this.setState({ data: res.data });
            })
    }

    return (
        <Container fluid={"xxl"}>
            <Container>
                <Table responsive="sm" className={"text-center"}>
                    <thead>
                    {props.headers.map(elements => (
                        <tr>

                            <th>{elements}</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>

                    ))}

                    </thead>
                    <tbody className={styles.adminTableRows}>
                    {!currentData.data || currentData.data.length === 0 ?
                        (
                            <tr>
                                <td colSpan="6" align="center">
                                    No table entries currently available.
                                </td>
                            </tr>
                        )
                        :
                        currentData.data.map(data => (
                            <tr>
                                <td>{data.first_name}</td>
                                <td><CustomButton text={"Edit"}/></td>
                                <td><CustomButton text={"Delete"} variant={"error"}/></td>

                            </tr>
                        ))}
                    </tbody>

                </Table>
            </Container>
        </Container>

    );
};

export default AdminTable;
