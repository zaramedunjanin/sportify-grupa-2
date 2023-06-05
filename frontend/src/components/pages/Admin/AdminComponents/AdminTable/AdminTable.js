import React, { useEffect, useRef, useState } from "react";
import styles from "./AdminTable.module.scss";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import DeleteModal from "../../../../organisms/Modal/DeleteModal/DeleteModal";
import { getDataList } from "../../../../../services/AdminService/useAdminFetcher";
import { deleteData,declineCompany,acceptCompany } from "../../../../../services/AdminService/useAdminMutator";

import UserEditModal from "../AdminModals/EditModals/UserEditModal";
import VenueEditModal from "../AdminModals/EditModals/VenueEditModal";
import SportEditModal from "../AdminModals/EditModals/SportEditModal";
import ReservationEditModal from "../AdminModals/EditModals/ReservationEditModal";
import QuestionEditModal from "../AdminModals/EditModals/QuestionEditModal";
import InviteEditModal from "../AdminModals/EditModals/InviteEditModal";
import RatingEditModal from "../AdminModals/EditModals/RatingEditModal";
import axios from "axios";
import {baseURL} from "../../../../../services/AdminService/adminService";

const AdminTable = ({ page, ...props }) => {
  const [deleteShow, setDeleteShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [acceptShow, setAcceptShow] = useState(false);
  const [declineShow, setDeclineShow] = useState(false);
  const [addShow, setAddShow] = useState(false);

    let modelColumns = props.databasecolumns[page];
  let [row, setRow] = useState([]);
  const [data, setData] = useState([]);


  useEffect(() => {
    getDataList(setData,page);
  }, []);

  const handleDelete = () => {
    setDeleteShow(false);
    deleteData(row.id, page);
  };
  const handleDecline = () => {
    setDeclineShow(false);
    declineCompany(row, page);
  };
  const handleAccept = () => {
    setAcceptShow(false);
    acceptCompany(row, page);
  };
  return (
    <Container>
        {page !== "verification" &&
            <button
                key={`add`}
                onClick={() => {
                    setAddShow(true);
                }}
                className={"bg-transparent border-0"}
            >
        <span className="material-symbols-outlined">

            library_add
                    </span>
            </button>
        }

      <Table
        responsive
        className={`text-center align-middle ${styles.adminTable}`}
      >
        <thead>
          <tr className={styles.adminTableHeader}>
            {modelColumns.headers.map((elements, index) => (
              <th key={`header${index}`}>{elements}</th>
            ))}
            {page === "verification" ? (
              <>
                <th>Accept</th>
                <th>Decline</th>
              </>
            ) : (
              <>
                <th>Edit</th>
                <th>Delete</th>
              </>
            )}
          </tr>
        </thead>
        <tbody className={styles.adminTableRows}>
          {!data || data.length === 0 ? (
            <tr>
              <td colSpan={modelColumns.headers.length + 2} align="center">
                No table entries currently available.
              </td>
            </tr>
          ) : (
            data.map((d, index) => (
              <tr key={`row${index}`}>
                {modelColumns.fields.map((field) => (
                  <td key={`${field}${index}`}>
                    {d[field] === null || d[field] === ""
                      ? "Pending"
                      : d[field] === true
                      ? (field)
                      : d[field] === false
                      ? "Not "+(field)
                      : field === "role"
                      ? d[field] === 1
                        ? "Admin"
                        : d[field] === 2
                        ? "User"
                        : d[field] === 3 && "User"
                      : typeof d[field] === "object"
                      ? d[field]
                      : field.toString().includes('picture')?
                      <img src ={d[field]} alt={"slika"}/>
                    :d[field]
                    }
                  </td>
                ))}
                {page === "verification" ?
                  <>
                    <td>
                      <button
                        key={`accept${index}`}
                        onClick={() => {
                          setAcceptShow(true);
                          setRow(d);
                        }}
                        className={"bg-transparent border-0"}
                      >
                        <span
                          className={`material-symbols-outlined ${styles.iconBlue}`}
                        >
                          done
                        </span>
                      </button>
                    </td>
                    <td>
                      <button
                        key={`decline${index}`}
                        onClick={() => {
                          setRow(d);
                          setDeclineShow(true);
                        }}
                        className={"bg-transparent border-0"}
                      >
                        <span
                          className={`material-symbols-outlined ${styles.iconRed}`}
                        >
                          close
                        </span>
                      </button>
                    </td>
                  </>
                 :
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
                }
              </tr>
            ))
          )}
        </tbody>
      </Table>
      <DeleteModal
        {...(deleteShow === true && {
          show: deleteShow,
          onHide: () => {
            setDeleteShow(false);
          },
          onClick: handleDelete,
          type: "Delete",
        })}
        {...(declineShow === true && {
          show: declineShow,
          onHide: () => {
            setDeclineShow(false);
          },
          onClick: handleDecline,
          type: "Decline",
        })}
          {...(acceptShow === true && {
          show: acceptShow,
          onHide: () => {
            setAcceptShow(false);
          },
          onClick: handleAccept,
          type: "Accept",
        })}
      />
      {page === "users" && (
        <UserEditModal
          page={page}
          table={page}
          data={row}
          columns={modelColumns}
          {...(addShow === true && {add: addShow, show:addShow, onHide:() => setAddShow(false)})}
          {...(editShow === true && {edit: editShow, show:editShow, onHide:() => setEditShow(false)})}

        />
      )}
      {page === "venues" && (
        <VenueEditModal
          page={page}
          table={page}
          data={row}
          columns={modelColumns}
          {...(addShow === true && {add: addShow, show:addShow, onHide:() => setAddShow(false)})}
          {...(editShow === true && {edit: editShow, show:editShow, onHide:() => setEditShow(false)})}

        />
      )}
      {page === "sports" && (
        <SportEditModal
          page={page}
          table={page}
          data={row}
          columns={modelColumns}
          {...(addShow === true && {add: addShow, show:addShow, onHide:() => setAddShow(false)})}
          {...(editShow === true && {edit: editShow, show:editShow, onHide:() => setEditShow(false)})}

        />
      )}
      {page === "reservations" && (
        <ReservationEditModal
          page={page}
          table={page}
          data={row}
          columns={modelColumns}
          {...(addShow === true && {add: addShow, show:addShow, onHide:() => setAddShow(false)})}
          {...(editShow === true && {edit: editShow, show:editShow, onHide:() => setEditShow(false)})}
        />
      )}
      {page === "questions" && (
        <QuestionEditModal
          page={page}
          table={page}
          data={row}
          columns={modelColumns}
          {...(addShow === true && {add: addShow, show:addShow, onHide:() => setAddShow(false)})}
          {...(editShow === true && {edit: editShow, show:editShow, onHide:() => setEditShow(false)})}
        />
      )}
      {page === "acceptedinvites" && (
        <InviteEditModal
          page={page}
          table={page}
          data={row}
          columns={modelColumns}
          {...(addShow === true && {add: addShow, show:addShow, onHide:() => setAddShow(false)})}
          {...(editShow === true && {edit: editShow, show:editShow, onHide:() => setEditShow(false)})}

        />
      )}
      {page === "ratings" && (
        <RatingEditModal
          page={page}
          table={page}
          data={row}
          columns={modelColumns}
          {...(addShow === true && {add: addShow, show:addShow, onHide:() => setAddShow(false)})}
          {...(editShow === true && {edit: editShow, show:editShow, onHide:() => setEditShow(false)})}

        />
      )}
    </Container>
  );
};

export default AdminTable;
