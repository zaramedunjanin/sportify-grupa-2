import Card from "./Card/Card";
import Dropdown from "./FilterDropdown/Dropdown";
import { redirect, useNavigate, useParams } from "react-router-dom";
import getAllVenues from "../../../services/Venue/Query";
import React, { useState, useEffect } from "react";
import Navbar from "../../organisms/Navbar/Navbar";
const initialState = {
  searchText: null,
  min_price: null,
  max_price: null,
  location: null,
  sport: null,
  sortBy: null,
};

const SearchResults = () => {
  const handleFilterChange = (searchCriteria) => {
    setFilters(searchCriteria);
  };
  const [filters, setFilters] = useState(initialState);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Perform the API call or data fetching here
        const response = await getAllVenues(filters);
        setResult(response);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [filters]);

  return (
    <>
      <Navbar variant="search" />
      <div>
        <div className="d-flex justify-content-end ">
          <div className="row mt-1 me-5">
            <div className="col">
              <Dropdown emitCurrentState={handleFilterChange} />
            </div>
          </div>
        </div>

        <div className="container mt-5 d-flex justify-content-center">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
            {result &&
              result.length !== 0 &&
              result.data.map((venue) => {
                return (
                  <div
                    key={result.data.id}
                    className="col d-flex justify-content-center"
                  >
                    <Card venue={venue} />
                  </div>
                );
              })}
            {/* <div className="col d-flex justify-content-center"><Card /></div>
          <div className="col d-flex justify-content-center"><Card /></div>
          <div className="col d-flex justify-content-center"><Card /></div>
          <div className="col d-flex justify-content-center"><Card /></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
