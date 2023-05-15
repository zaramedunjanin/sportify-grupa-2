import React from "react";
import styles from "./AdminTable.module.scss"
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import CustomButton from "../../../../atoms/Buttons/CustomButton";
import Row from "react-bootstrap/Row";

const AdminTable = (props) => {

    return (
        <Container fluid = {"xxl"} >
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
                    {props.data.map(data => (
                        <tr>
                            <td>{data}</td>
                            <td><CustomButton text={"Edit"}/></td>
                            <td><CustomButton text ={"Delete"} variant={"error"}/></td>

                        </tr>
                    ))}
                    </tbody>

                </Table>
            </Container>
        </Container>

    );
};

export default AdminTable;
