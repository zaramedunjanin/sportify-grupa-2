import "./Dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState, useContext } from "react";
import { getDataList } from "../../../../services/AdminService/useAdminFetcher";
import { CategoryContext } from "../../../../context/CategoryContext";

const sortOptions = [
  { name: "Default", sortBy: "" },
  { name: "Low to high price", sortBy: "price_asc" },
  { name: "High to low price", sortBy: "price_desc" },
  { name: "Alphabetical: A to Z", sortBy: "alphabetical_asc" },
  { name: "Alphabetical: Z to A", sortBy: "alphabetical_desc" },
];

const Dropdown = () => {
  const { searchCriteria, setSearchCriteria } = useContext(CategoryContext);
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const getSports = async () => {
      try {
        getDataList(setSports, "sports");
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getSports();
  }, []);

  const validatePriceInput = (name, value) => {
    console.log(name, value);
    if (value && value < 0) {
      console.log("false");
      return false;
    }
  };

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
      <div className="dropdown">
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
            Price
          </label>
          <div className="row g-3">
            <div className="col">
              <input
                type="number"
                min={0}
                className=" input"
                placeholder="min"
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
                placeholder="max"
                aria-label="max"
                name="max_price"
                value={searchCriteria.max_price}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <label htmlFor="exampleFormControlInput1" className="form-label">
            Location
          </label>
          <select
            className="form-select text"
            aria-label="Default select example"
            name="location"
            value={searchCriteria.location}
            onChange={handleInputChange}
          >
            <option defaultValue>All</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <label htmlFor="exampleFormControlInput1" className="form-label">
            Sport
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="sport"
            value={searchCriteria.sport}
            onChange={handleInputChange}
          >
            <option value="">All</option>
            {sports &&
              sports.map((sport, index) => {
                return <option value={sport.id}> {sport.sport_name} </option>;
              })}
          </select>

          <label htmlFor="exampleFormControlInput1" className="form-label">
            Sort by
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
