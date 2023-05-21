import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const Dropdown = () => {
  return <>
    <div className="dropdown">
      <button className="btn btn-light btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "150px", border: "1px solid black" }} data-bs-auto-close="outside">
        <FontAwesomeIcon icon={faFilter} /> Filter
      </button>
      <div className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start shadow p-2" style={{ width: "350px" }}>
        <label for="exampleFormControlInput1" class="form-label">Price</label>
        <div class="row g-3">
          <div class="col">
            <input type="text" class=" input" placeholder="min" aria-label="min" />
          </div>
          <div class="col">
            <input type="text" class=" input" placeholder="max" aria-label="max" />
          </div>
        </div>

        <label for="exampleFormControlInput1" class="form-label">Location</label>
        <select class="form-select text" aria-label="Default select example">
          <option selected>All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <label for="exampleFormControlInput1" class="form-label">Sport</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>All</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <label for="exampleFormControlInput1" class="form-label">Sort by</label>
        <select class="form-select" aria-label="Default select example">
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