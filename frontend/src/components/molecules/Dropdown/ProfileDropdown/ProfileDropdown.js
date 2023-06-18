import React, {useState, useContext, useEffect} from "react";
import "./ProfileDropdown.scss";
import { Dropdown, DropdownButton } from "react-bootstrap";
import profile from "../../../../assets/images/profile.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import UserData from "../../../pages/UserDashboard/UserData/UserData";

import { AuthContext } from "../../../../context/AuthContext";
import {getDataList} from "../../../../services/AdminService/useAdminFetcher";

const ProfileDropdown = ({
  profilePicture = profile,
  profileLink = "/",
  ...props
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { logout, isAuthenticated, user, fetchUserProfile } = useContext(AuthContext);

  const [modalOpen, setModalOpen] = useState(false);

  const handleEditClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [sports, setSports] = useState({});

  useEffect(()=>{
    const fetchSports = async () => {
      try {
        const response = await getDataList("sports");
        setSports(response);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchSports();
  }, []);

  return (
    <div>
      <DropdownButton
        variant="bg-none"
        align="end"
        title={
          <img
            src={user.profile_picture}
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
        <Dropdown.Item onClick={() => logout()} eventKey="2">
          {t("log_out")}
        </Dropdown.Item>
      </DropdownButton>
      {modalOpen && (

        <UserData sports = {sports} data ={user} show={modalOpen} onHide={handleCloseModal} edit={true} />
      )}
    </div>
  );
};

export default ProfileDropdown;
