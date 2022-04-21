import { useContext } from "react";
import SearchContext from "../SearchContext";

const BuyCheckbox = () => {
  const { buy, setBuy } = useContext(SearchContext);

  return (
    <div>
      <input
        data-testid="cbShowHide"
        type="checkbox"
        name="Buy"
        value="Buy"
        onChange={() => setBuy(!buy)}
        checked={buy}
      />
      <label htmlFor="Buy"> Houses For Sale</label>
      {buy && <div classname="box" data-testid="box"></div>}

    </div>
  );
};

export default BuyCheckbox;
