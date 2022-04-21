import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BuyCheckbox from '../Pages/Search/Filters/BuyCheckbox';
import PriceRange from '../Pages/Search/Filters/PriceRange';
  
describe("<PriceRange />", () => {
 
  test('render email input', () => {
    render(<PriceRange />);
 
    const inputEl = screen.getByTestId("price-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "number");
  });
 
  test('toggle element by selecting checkbox', () => {
    render(<BuyCheckbox />);
 
    const inputEl = screen.getByTestId("cbShowHide");
 
    // Execute the click event 
    userEvent.click(inputEl);
    expect(inputEl).not.toBeChecked();
    expect(screen.queryByTestId("box")).not.toBeInTheDocument();
  });

   test('pass valid number to test price input field', () => {
    render(<PriceRange />);
 
    const inputEl = screen.getByTestId("price-input");
    userEvent.type(inputEl, "100000");
 
    expect(screen.getByTestId("price-input")).toHaveValue(100000);
   });
 
});