import React, { useEffect, useRef, useState } from "react";
import styles from "./AdminTable.module.scss";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import DeleteModal from "../../../../organisms/Modal/DeleteModal/DeleteModal";
import { getDataList } from "../../../../../services/AdminService/useAdminFetcher";
import {
  deleteData,
  declineCompany,
  acceptCompany,
} from "../../../../../services/AdminService/useAdminMutator";

import UserModal from "../AdminModals/UserModal";
import VenueModal from "../AdminModals/VenueModal";
import SportEditModal from "../AdminModals/SportModal";
import ReservationEditModal from "../AdminModals/ReservationModal";
import QuestionEditModal from "../AdminModals/QuestionModal";
import InviteEditModal from "../AdminModals/InviteModal";
import RatingEditModal from "../AdminModals/RatingModal";
import ProfileDropdown from "../../../../molecules/Dropdown/ProfileDropdown/ProfileDropdown";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

const AdminTable = ({ page, ...props }) => {
  const { t } = useTranslation();
  const [deleteShow, setDeleteShow] = useState(false);
  const [acceptShow, setAcceptShow] = useState(false);
  const [declineShow, setDeclineShow] = useState(false);
  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  let modelColumns = props.databasecolumns[page];
  let [row, setRow] = useState([]);
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const response = await getDataList(page);
      setData(response);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleDelete = async () => {
    setDeleteShow(false);
    await deleteData(row.id, page);
    await fetchData();
  };
  const handleDecline = async () => {
    setDeclineShow(false);
    await declineCompany(row, page);
    await fetchData();
  };
  const handleAccept = async () => {
    setAcceptShow(false);
    await acceptCompany(row, page);
    await fetchData();
  };

  return (
    <Container className={styles.tableBackground}>
      {page !== "verification" && (
        <Container className={"text-end"}>
          <button
            key={`add`}
            onClick={() => {
              setAddShow(true);
            }}
            className={"bg-transparent border-0"}
          >
            <span className="material-symbols-outlined">library_add</span>
          </button>
        </Container>
      )}
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
                <th>{t("accept")}</th>
                <th>{t("decline")}</th>
              </>
            ) : (
              <>
                <th>{t("edit")}</th>
                <th>{t("delete")}</th>
              </>
            )}
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
                        { d[field].map((element, index) => {
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
                {page === "verification" ? (
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
                ) : (
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
                )}
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
        <UserModal
          page={page}
          table={page}
          data={row}
          {...(addShow === true && {
            add: addShow,
            show: addShow,
            onHide: () => setAddShow(false),
          })}
          {...(editShow === true && {
            edit: editShow,
            show: editShow,
            onHide: () => setEditShow(false),
          })}
        />
      )}
      {page === "venues" && (
        <VenueModal
          page={page}
          table={page}
          data={row}
          {...(addShow === true && {
            add: addShow,
            show: addShow,
            onHide: () => setAddShow(false),
          })}
          {...(editShow === true && {
            edit: editShow,
            show: editShow,
            onHide: () => setEditShow(false),
          })}
        />
      )}
      {page === "sports" && (
        <SportEditModal
          page={page}
          table={page}
          data={row}
          {...(addShow === true && {
            add: addShow,
            show: addShow,
            onHide: () => setAddShow(false),
          })}
          {...(editShow === true && {
            edit: editShow,
            show: editShow,
            onHide: () => setEditShow(false),
          })}
        />
      )}
      {page === "reservations" && (
        <ReservationEditModal
          page={page}
          table={page}
          data={row}
          {...(addShow === true && {
            add: addShow,
            show: addShow,
            onHide: () => setAddShow(false),
          })}
          {...(editShow === true && {
            edit: editShow,
            show: editShow,
            onHide: () => setEditShow(false),
          })}
        />
      )}
      {page === "questions" && (
        <QuestionEditModal
          page={page}
          table={page}
          data={row}
          {...(addShow === true && {
            add: addShow,
            show: addShow,
            onHide: () => setAddShow(false),
          })}
          {...(editShow === true && {
            edit: editShow,
            show: editShow,
            onHide: () => setEditShow(false),
          })}
        />
      )}
      {page === "acceptedinvites" && (
        <InviteEditModal
          page={page}
          table={page}
          data={row}
          {...(addShow === true && {
            add: addShow,
            show: addShow,
            onHide: () => setAddShow(false),
          })}
          {...(editShow === true && {
            edit: editShow,
            show: editShow,
            onHide: () => setEditShow(false),
          })}
        />
      )}
      {page === "ratings" && (
        <RatingEditModal
          page={page}
          table={page}
          data={row}
          {...(addShow === true && {
            add: addShow,
            show: addShow,
            onHide: () => setAddShow(false),
          })}
          {...(editShow === true && {
            edit: editShow,
            show: editShow,
            onHide: () => setEditShow(false),
          })}
        />
      )}
    </Container>
  );
};

export default AdminTable;
