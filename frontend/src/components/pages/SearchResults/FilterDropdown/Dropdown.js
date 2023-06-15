import "./Dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState, useContext } from "react";
import { getDataList } from "../../../../services/AdminService/useAdminFetcher";
import { CategoryContext } from "../../../../context/CategoryContext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Dropdown = () => {
  const { searchCriteria, setSearchCriteria } = useContext(CategoryContext);
  const [sports, setSports] = useState([]);
  const { t } = useTranslation();
  const sortOptions = [
    { name: t("default"), sortBy: "" },
    { name: t("low_to_hight"), sortBy: "price_asc" },
    { name: t("high_to_low"), sortBy: "price_desc" },
    { name: t("a_to_z"), sortBy: "alphabetical_asc" },
    { name: t("z_to_a"), sortBy: "alphabetical_desc" },
  ];
  useEffect(() => {
    const getSports = async () => {
      try {
        await getDataList(setSports, "sports");
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getSports();
  }, []);

  const handleInputChange = (event) => {
    var { name, value } = event.target;

    if (value === "") {
      value = null;
    }

    if (value && (name === "max_price" || name === "min_price")) {
      const positiveInput = value.replace(/[^0-9]/g, "");
      setSearchCriteria({ ...searchCriteria, [name]: positiveInput });
      return;
    }
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  return (
    <>
      <div className="dropdown text-end">
        <button
          className="btn btn-light btn-lg"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ width: "150px", border: "1px solid black" }}
          data-bs-auto-close="outside"
        >
          <FontAwesomeIcon icon={faFilter} /> Filter
        </button>
        <div
          className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start shadow p-2"
          style={{ width: "350px" }}
        >
          <label htmlFor="exampleFormControlInput1" className="form-label">
            {t("price")}
          </label>
          <div className="row g-3">
            <div className="col">
              <input
                type="number"
                min={0}
                className=" input"
                placeholder={t("min")}
                aria-label="min"
                name="min_price"
                value={searchCriteria.min_price}
                onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <input
                type="number"
                min={0}
                className=" input"
                placeholder={t("max")}
                aria-label="max"
                name="max_price"
                value={searchCriteria.max_price}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <label htmlFor="exampleFormControlInput1" className="form-label">
            {t("location")}
          </label>
          <select
            className="form-select text"
            aria-label="Default select example"
            name="location"
            value={searchCriteria.location}
            onChange={handleInputChange}
          >
            <option defaultValue>{t("all")}</option>
            <option value="1">{t("one")}</option>
            <option value="2">{t("two")}</option>
            <option value="3">{t("three")}</option>
          </select>

          <label htmlFor="exampleFormControlInput1" className="form-label">
            {t("sport")}
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="sport"
            value={searchCriteria.sport}
            onChange={handleInputChange}
          >
            <option value="">{t("all")}</option>
            {sports &&
              sports.map((sport, index) => {
                return <option value={sport.id}> {sport.sport_name} </option>;
              })}
          </select>

          <label htmlFor="exampleFormControlInput1" className="form-label">
            {t("sort_by")}
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="sortBy"
            value={searchCriteria.sortBy}
            onChange={handleInputChange}
          >
            {sortOptions.map((option, index) => {
              return <option value={option.sortBy}>{option.name}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
