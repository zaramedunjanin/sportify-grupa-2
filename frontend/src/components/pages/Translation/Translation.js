import React from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownButton } from "react-bootstrap";

import "./Translation.css";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "en",
  },
  {
    code: "bhs",
    name: "Bosnian",
    country_code: "bhs",
  },
];

const Translation = () => {
  const { t } = useTranslation();
  return (
    <div>
      <DropdownButton
        variant="bg-none"
        align="end"
        id="dropdown-menu profile-button"
        title={"translate"}
      >
        <Dropdown.Item eventKey="1">English</Dropdown.Item>
        <Dropdown.Item eventKey="3">Bosnian</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Translation;
