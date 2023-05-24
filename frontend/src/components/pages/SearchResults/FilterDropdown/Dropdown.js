import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const Dropdown = ({ emitCurrentState }) => {

  const initialState = {
    searchText: '',
    min_price: 0,
    max_price: 0,
    location: '',
    sport: '',
    sortBy: ''
  }
  const [searchCriteria, setSearchCriteria] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
    emitCurrentState(searchCriteria);
  };

  return <>
    <div className="dropdown">
      <button className="btn btn-light btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "150px", border: "1px solid black" }} data-bs-auto-close="outside">
        <FontAwesomeIcon icon={faFilter} /> Filter
      </button>
      <div className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start shadow p-2" style={{ width: "350px" }}>
        <label for="exampleFormControlInput1" class="form-label">Price</label>
        <div class="row g-3">
          <div class="col">
            <input type="text" class=" input" placeholder="min" aria-label="min" name="min_price" value={searchCriteria.min_price} onChange={handleInputChange} />
          </div>
          <div class="col">
            <input type="text" class=" input" placeholder="max" aria-label="max" name="max_price" value={searchCriteria.max_price} onChange={handleInputChange} />
          </div>
        </div>

        <label for="exampleFormControlInput1" class="form-label">Location</label>
        <select class="form-select text" aria-label="Default select example" name="location" value={searchCriteria.location} onChange={handleInputChange}>
          <option selected>All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <label for="exampleFormControlInput1" class="form-label">Sport</label>
        <select class="form-select" aria-label="Default select example" name="sport" value={searchCriteria.sport} onChange={handleInputChange}>
          <option selected>All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <label for="exampleFormControlInput1" class="form-label">Sort by</label>
        <select class="form-select" aria-label="Default select example" name="sortBy" value={searchCriteria.sortBy} onChange={handleInputChange}>
          <option selected>All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  </>
}

export default Dropdown;