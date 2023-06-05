import React, { useState } from "react";
import "./ProfileDropdown.scss";
import { Dropdown, DropdownButton } from "react-bootstrap";
import profile from "../../../../assets/images/profile.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import UserData from "../../../pages/UserDashboard/UserData/UserData";

const ProfileDropdown = ({
  profilePicture = profile,
  profileLink = "/",
  ...props
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [modalOpen, setModalOpen] = useState(false);

  const handleEditClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <DropdownButton
        variant="bg-none"
        align="end"
        title={
          <img
            src={profilePicture}
            alt="Profile Picture"
            className={"profile-picture"}
          />
        }
        id="dropdown-menu-align-end profile-button"
      >
        <Dropdown.Item onClick={() => navigate("/userdashboard")} eventKey="1">
          {t("profile")}
        </Dropdown.Item>
        <Dropdown.Item eventKey="3" onClick={handleEditClick}>
          {t("edit")}
        </Dropdown.Item>
        <Dropdown.Item eventKey="2">{t("log_out")}</Dropdown.Item>
      </DropdownButton>
      {modalOpen && (
        <UserData showModal={modalOpen} handleClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProfileDropdown;
