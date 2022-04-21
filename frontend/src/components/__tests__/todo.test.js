import { render, screen, cleanup } from '@testing-library/react';
import Todo from '../todo'
import '@testing-library/jest-dom'
import Login from '../Pages/Login/Login';
import About from '../Pages/About/About';

test('should render todo component', () =>{
    render(<Todo/>); 
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('Hello')
})