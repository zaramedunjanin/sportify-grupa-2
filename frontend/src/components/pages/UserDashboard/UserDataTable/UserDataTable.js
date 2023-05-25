import { useEffect, useState } from "react";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

import styles from "./UserDataTable.css";

const UserDataTable = ({ page, ...props }) => {
  const [deleteShow, setDeleteShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  let columns = props.databasecolumns;
  let [id, setID] = useState(0);
  const [data, setData] = useState([]);

  return (
    <Container fluid={"xxl"}>
      <Container>
        <Table responsive className={"text-center align-middle"}>
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
            {!data || data.length === 0 ? (
              <tr>
                <td colSpan={columns[page].headers.length + 2} align="center">
                  No table entries currently available.
                </td>
              </tr>
            ) : (
              data.map((data, index) => (
                <tr key={`row${index}`}>
                  {columns[page].fields.map((fields) => (
                    <td key={`${fields}${index}`}>{data[fields]}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
};

export default UserDataTable;
