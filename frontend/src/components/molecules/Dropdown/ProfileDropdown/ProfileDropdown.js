import React from "react";
import "./ProfileDropdown.scss";
import {Dropdown, DropdownButton} from "react-bootstrap";
import profile from "../../../../assets/images/profile.jpg";

const ProfileDropdown = ({
                             profilePicture = profile,
                             profileLink = "/",
                             ...props
                         }) => {

    return (
        <DropdownButton
            variant="bg-none"
            align="end"
            title={<img src={profilePicture} alt="Profile Picture" className={"profile-picture"}/>}
            id="dropdown-menu-align-end profile-button"
        >
            <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
            <Dropdown.Item eventKey="2">Log Out</Dropdown.Item>
        </DropdownButton>
    )
};

export default ProfileDropdown;
{/*

*/
}