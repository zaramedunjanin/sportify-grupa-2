import Card from "./Card/Card";
import Dropdown from "./FilterDropdown/Dropdown";
import { getAllVenues } from "../../../services/Venue/Query";
import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../organisms/Navbar/Navbar";
import styles from "./SearchResult.module.scss";

import { SearchContext } from "../../../context/SearchContext";
import { CategoryContext } from "../../../context/CategoryContext";
import Footer from "../../organisms/Footer/Footer";
import useEffectTitle from "../../../hooks/useEffectTitle";

const SearchResults = () => {
  const [result, setResult] = useState([]);
  const { searchCriteria } = useContext(CategoryContext);
  const { searchText } = useContext(SearchContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Perform the API call or data fetching here
        const response = await getAllVenues(searchCriteria, searchText);
        setResult(response);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [searchCriteria, searchText]);

  return (
    <>
      <Navbar variant="search" />
      <div className={`${styles.bakc}`}>
        {result.data && result.data.length !== 0 && (
          <div className={`d-flex justify-content-end`}>
            <div className={`container mt-3`}>
              <Dropdown />
            </div>
          </div>
        )}

        {result.data && result.data.length === 0 && (
          <div
            className={`container mt-4 d-flex justify-content-center ${styles.no_result}`}
          >
            No entries currently available.
          </div>
        )}

        <div className="container mt-4 d-flex justify-content-center">
          <div className="row row-cols-xl-auto row-cols-lg-2 row-cols-md-2 row-cols-sm-1 justify-content-center">
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;
