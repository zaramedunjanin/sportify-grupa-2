import Card from "./Card/Card";
import Dropdown from "./FilterDropdown/Dropdown";
import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import getAllVenues from '../../../services/Venue/Query';
import React, { useState } from 'react';
import Navbar from "../../organisms/Navbar/Navbar";


const SearchResults = () => {

  const handleFilterChange = (searchCriteria) => {
    console.log(searchCriteria);
  }

  const result = useQuery({ queryKey: ['venues'], queryFn: getAllVenues })
  console.log(result.data)
  if (result.isLoading === true)
    return <h6>Loading...</h6>

  return <>
    <Navbar variant="search" />
    <div>
      <div className="d-flex justify-content-end ">
        <div className="row mt-5 me-5">
          <div className="col">
            <Dropdown emitCurrentState={handleFilterChange} />
          </div>
        </div>
      </div>

      <div className="container mt-5 d-flex justify-content-center">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
          {!result.isLoading && !result.error && result.data.map((venue) => {
            return <div key={result.data.id} className="col d-flex justify-content-center"><Card venue={venue} /></div>
          })}
          {/* <div className="col d-flex justify-content-center"><Card /></div>
          <div className="col d-flex justify-content-center"><Card /></div>
          <div className="col d-flex justify-content-center"><Card /></div>
          <div className="col d-flex justify-content-center"><Card /></div> */}
        </div>
      </div>
    </div>
  </>
}

export default SearchResults;