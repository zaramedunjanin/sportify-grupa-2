import { useState } from "react";
import useImageUpdate from "../../../../../hooks/useImageUpdate";

const initialData = {
  venue_name: "",
  address: "",
  city: "",
  type: "",
  image: "",
  description: "",
  opening_time: "",
  closing_time: "",
  price_per_hour: "",
  sport: "",
};

const VenueModal = ({ venue, action, ...props }) => {
  const [currentValues, setCurrentValues] = useState(venue ? venue: initialData );

  const saveVenue = () => {
    if (action === "add") {
      addVenue();
    } else if (action === "edit") {
      updateVenue();
    }
  };

  const addVenue = () => {
    console.log("add");
  };
  const updateVenue = () => {
    console.log("edit");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentValues({...currentValues, [name]:value})
  };

  return (
    <div
      class="modal fade"
      id="venuemodal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              {action === "add" ? "Add venue" : "Edit venue"}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Venue name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="venue_name"
                  value={currentValues.venue_name}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="address"
                  value={currentValues.address}
                  onChange={handleChange}
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="city"
                  value={currentValues.city}
                  onChange={handleChange}
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Type
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="type"
                  value={currentValues.type}
                  onChange={handleChange}
                />
              </div>

              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Image
                </label>
                <input class="form-control" type="file" id="formFile" />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Description
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="description"
                  value={currentValues.description}
                  onChange={handleChange}
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Price per hour
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="price_per_hour"
                  value={currentValues.price_per_hour}
                  onChange={handleChange}
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Opening time
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="opening_time"
                  value={currentValues.opening_time}
                  onChange={handleChange}
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Closing time
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="closing_time"
                  value={currentValues.closing_time}
                  onChange={handleChange}
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Sport
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" onClick={saveVenue}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueModal;
