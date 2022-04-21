import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PriceRange from '../Pages/Search/Filters/PriceRange';
  
describe("<PriceRange />", () => {
 
  test('render email input', () => {
    render(<PriceRange />);
 
    const inputEl = screen.getByTestId("price-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "number");
  });
 
  test('pass valid number to test price input field', () => {
    render(<PriceRange />);
 
    const inputEl = screen.getByTestId("price-input");
    userEvent.type(inputEl, "100000");
 
    expect(screen.getByTestId("price-input")).toHaveValue(100000);
   });
 
//   test('pass invalid number to test input value', () => {
//     render(<PriceRange />);
 
//     const inputEl = screen.getByTestId("price-input");
//     userEvent.type(inputEl, "test");
 
//     expect(screen.getByTestId("price-input")).toHaveValue(100000);
//   });
 
});