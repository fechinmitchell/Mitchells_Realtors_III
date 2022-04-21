import { useContext } from "react";
import SearchContext from "../SearchContext";

const RentCheckbox = () => {
  const { rent, setRent } = useContext(SearchContext);

  return (
    <div>
      <input
        data-testid="cbShowHide"
        type="checkbox"
        name="Rent"
        value="Rent"
        onChange={() => setRent(!rent)}
        checked={rent}
      />
      <label htmlFor="Rent"> Houses For Rent</label>
      {rent && <div classname="box" data-testid="box"></div>}
    </div>
  );
};

export default RentCheckbox;
