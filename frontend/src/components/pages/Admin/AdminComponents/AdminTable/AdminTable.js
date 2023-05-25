import {useEffect, useState} from "react";
import styles from "./AdminTable.module.scss"
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import CustomButton from "../../../../atoms/Buttons/CustomButton";
import DeleteModal from "../../../../organisms/Modal/DeleteModal/DeleteModal";
import InputModal from "../../../../organisms/Modal/InputModal/InputModal";
import {getDataList} from "../../../../../services/AdminService/useAdminFetcher";
import {deleteData} from "../../../../../services/AdminService/useAdminMutator";

const AdminTable = ({page, ...props}) => {
    const [deleteShow, setDeleteShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    let columns = props.databasecolumns;
    let [ID, setID] = useState(0)
    const [data, setData] = useState([]);

    useEffect(() => {
        getDataList(setData, page);

    }, [data]);


    return (
        <Container fluid={"xxl"}>
            <Container>
                <Table responsive className={`text-center align-middle ${styles.adminTable}`}>
                    <thead>
                    <tr>

                        {columns[page].headers.map((elements, index) => (
                            <th key={`header${index}`}>{elements}</th>
                        ))}
                        <th>Edit</th>
                        <th>Delete</th>

                    </tr>

                    </thead>
                    <tbody className={styles.adminTableRows}>
                    {!data || data.length === 0 ?
                        (
                            <tr>
                                <td colSpan={columns[page].headers.length + 2} align="center">
                                    No table entries currently available.
                                </td>
                            </tr>
                        )
                        :
                        (
                            data.map((data, index) => (
                                <tr key={`row${index}`}>

                                    {columns[page].fields.map(fields => (
                                        (
                                        (data[fields]) === null  || (data[fields]) === ""?
                                                <td key={`${fields}${index}`}>Empty</td>
                                                :
                                                <td key={`${fields}${index}`}>{data[fields]}</td>
                                        )
                                    ))}
                                    <td><CustomButton key={`edit${index}`}
                                                      text={"Edit"}
                                                      onClick={() => setEditShow(true)}/></td>
                                    <td><CustomButton key={`delete${index}`}
                                                      text={"Delete"} variant={"error"}
                                                      onClick={() => {
                                                          setID(data.id);
                                                          setDeleteShow(true)
                                                      }}

                                    /></td>

                                </tr>
                            ))
                        )

                    }
                    </tbody>

                </Table>
            </Container>
            <DeleteModal show={deleteShow}
                         onHide={() => setDeleteShow(false)}
                         onDelete={() => {
                             setDeleteShow(false);
                             deleteData(ID, page)
                         }}

            />
            <InputModal table={page} show={editShow}
                        onHide={() => setEditShow(false)}/>
        </Container>

    );
};

export default AdminTable;
