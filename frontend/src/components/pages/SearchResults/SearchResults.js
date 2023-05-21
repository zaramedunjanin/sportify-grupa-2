import Card from "./Card/Card";
import Dropdown from "./FilterDropdown/Dropdown";
import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import getAllVenues from '../../../services/Venue/Query';


const SearchResults = () => {

  const result = useQuery({ queryKey: ['venues'], queryFn: getAllVenues })
  return <>
    <ul>
      {result.isLoading === true ? 'LOADING' : 'NOT LOADING'}
    </ul>
    <div>
      <div class="d-flex justify-content-end ">
        <div className="row mt-5 me-5">
          <div className="col">
            <Dropdown />
          </div>
        </div>
      </div>

      <div className="container mt-5 d-flex justify-content-center">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
          <div className="col d-flex justify-content-center"><Card /></div>
          <div className="col d-flex justify-content-center"><Card /></div>
          <div className="col d-flex justify-content-center"><Card /></div>
          <div className="col d-flex justify-content-center"><Card /></div>
        </div>
      </div>
    </div>
  </>
}

export default SearchResults;