import "./Dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Dropdown = ({ emitCurrentState }) => {
  const initialState = {
    searchText: null,
    min_price: null,
    max_price: null,
    location: null,
    sport: null,
    sortBy: null,
  };
  const [searchCriteria, setSearchCriteria] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
    emitCurrentState({ ...searchCriteria, [name]: value });
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
                type="text"
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
                type="text"
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
            <option defaultValue>All</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            <option defaultValue>All</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
