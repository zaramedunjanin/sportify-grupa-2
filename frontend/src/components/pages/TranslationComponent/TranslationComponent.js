import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import "./TranslationComponent.css";

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

const TranslationComponent = () => {
  const { t } = useTranslation();
  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle dropdown_toggle_1 dropdown_toggle_2 p-2"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          color: "white",
        }}
      >
        <span class="material-symbols-outlined">translate</span>
      </button>
      <ul className="dropdown-menu">
        {languages.map(({ code, name, country_code }) => (
          <li key={country_code}>
            <button
              className="dropdown-item"
              onClick={() => i18next.changeLanguage(code)}
            >
              <span className={`mx-2`}></span>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TranslationComponent;
