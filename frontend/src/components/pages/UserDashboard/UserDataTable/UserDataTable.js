import React, {useContext, useEffect, useRef, useState} from "react";
import styles from "./UserDataTable.module.scss";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import DeleteModal from "../../../organisms/Modal/DeleteModal/DeleteModal";
import { getUserReservations } from "../../../../services/UserService/index";
import {
    deleteData,
} from "../../../../services/AdminService/useAdminMutator";
import { Dropdown, DropdownButton } from "react-bootstrap";

import axios from 'axios';
import { useTranslation } from "react-i18next";
import {AuthContext} from "../../../../context/AuthContext";

const UserDataTable = ({ page, ...props }) => {
    const { user } = useContext(AuthContext);
    const { t } = useTranslation();
    const [deleteShow, setDeleteShow] = useState(false);
    const [editShow, setEditShow] = useState(false);

    let modelColumns = props.databasecolumns["userdashboard"];
    let [row, setRow] = useState([]);
    const [data, setData] = useState("");

    const fetchData = async () => {
        try {
            console.log(user.id)
            const response = await getUserReservations(user.id);
            setData(response);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async () => {
        setDeleteShow(false);
        await deleteData(row.id, "reservations");
        await fetchData();
    };

    return (
        <Container className={styles.tableBackground}>
            <Table
                responsive
                className={`text-center align-middle ${styles.adminTable}`}
            >
                <thead>
                <tr className={styles.adminTableHeader}>
                    {modelColumns.headers.map((elements, index) => (
                        <th key={`header${index}`}>{elements}</th>
                    ))}
                        <>
                            <th>{t("edit")}</th>
                            <th>{t("delete")}</th>
                        </>
                </tr>
                </thead>
                <tbody className={styles.adminTableRows}>
                {!data || data.length === 0 ? (
                    <tr>
                        <td colSpan={modelColumns.headers.length + 2} align="center">
                            {t("table")}
                        </td>
                    </tr>
                ) : (
                    data.map((d, index) => (
                        <tr key={`row${index}`}>
                            {modelColumns.fields.map((field) => (
                                <td key={`${field}${index}`}>
                                    {d[field] === null || d[field] === "" ? (
                                        "Empty"
                                    ) : d[field] === true ? (
                                        field
                                    ) : d[field] === false ? (
                                        "Not " + field
                                    ) : field === "role" ? (
                                        d[field] === 1 ? (
                                            "Admin"
                                        ) : d[field] === 2 ? (
                                            "User"
                                        ) : (
                                            d[field] === 3 && "User"
                                        )
                                    ) : typeof d[field] === "object" ? (
                                        <DropdownButton
                                            variant="bg-none"
                                            title={"View All"}
                                            className={styles.adminDropdown}
                                        >
                                            {d[field].map((element, index) => {
                                                return (
                                                    <Dropdown.Item eventKey={index}>
                                                        {element}
                                                    </Dropdown.Item>
                                                );
                                            })}
                                        </DropdownButton>
                                    ) : field.toString().includes("picture") ? (
                                        <img
                                            className={styles.tableImage}
                                            src={d[field]}
                                            alt={"Image"}
                                        />
                                    ) : (
                                        d[field]
                                    )}
                                </td>
                            ))}

                                <>
                                    <td>
                                        <button
                                            key={`edit${index}`}
                                            onClick={() => {
                                                setEditShow(true);
                                                setRow(d);
                                            }}
                                            className={"bg-transparent border-0"}
                                        >
                        <span
                            className={`material-symbols-outlined ${styles.iconBlue}`}
                        >
                          edit_square
                        </span>
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            key={`delete${index}`}
                                            onClick={() => {
                                                setRow(d);
                                                setDeleteShow(true);
                                            }}
                                            className={"bg-transparent border-0"}
                                        >
                        <span
                            className={`material-symbols-outlined ${styles.iconRed}`}
                        >
                          delete
                        </span>
                                        </button>
                                    </td>
                                </>

                        </tr>
                    ))
                )}
                </tbody>
            </Table>
            <DeleteModal
                    show= {deleteShow}
                    onHide ={ () => {
                        setDeleteShow(false);
                    }}
                    onSubmit = {handleDelete}
                    type = {"Delete"}
            />
        </Container>
    );
};

export default UserDataTable;
