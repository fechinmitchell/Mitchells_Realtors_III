import { useContext } from "react";
import SearchContext from "../SearchContext";

const LocationCheckbox = () => {
  const { location, setLocation } = useContext(SearchContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a Location"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
      <label htmlFor="location"></label>
    </div>
  );
};

export default LocationCheckbox;