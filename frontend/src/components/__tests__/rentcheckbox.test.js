import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import RentCheckbox from '../Pages/Search/Filters/RentCheckbox';
 
describe("<RentCheckbox />", () => {
 
  test('render component', () => {
    render(<RentCheckbox />);
 
    const cbEl = screen.getByTestId("cbShowHide");
    expect(cbEl).toBeInTheDocument();
    expect(cbEl).not.toBeChecked();
 
    expect(screen.queryByTestId("box")).not.toBeInTheDocument();
  });
 
  test('toggle element by selecting checkbox', () => {
    render(<RentCheckbox />);
 
    const cbEl = screen.getByTestId("cbShowHide");
 
    // Execute the click event 
    userEvent.click(cbEl);
    expect(cbEl).not.toBeChecked();
    expect(screen.queryByTestId("box")).not.toBeInTheDocument();
  });
  
});
