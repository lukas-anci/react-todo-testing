import { screen, render, fireEvent } from '@testing-library/react';
import AddInput from './../AddInput';

const mockFn = jest.fn();

describe('Input testing', () => {
  it('Should render input', () => {
    render(<AddInput setTodos={() => {}} todos={[]} />);
    const inputEl = screen.getByPlaceholderText(/Add a new task/);
    expect(inputEl).toBeInTheDocument();
  });
  // input works
  it('Should be able to enter in input', () => {
    // Arrange
    render(<AddInput setTodos={() => {}} todos={[]} />);
    const inputEl = screen.getByPlaceholderText(/Add a new task/);
    // Act
    // change(El, kokschange)
    fireEvent.change(inputEl, { target: { value: 'Do sports on Sunday' } });
    // Assert
    expect(inputEl.value).toBe('Do sports on Sunday');
  });
});
