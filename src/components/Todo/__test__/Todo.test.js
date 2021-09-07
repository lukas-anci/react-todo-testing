import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from './../Todo';

// IT

// expectinam rasti ivesta reiksme todoliste

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

it('Should add single todo to a list ', () => {
  render(<MockTodo />);
  // gaunam input,
  const inputEl = screen.getByPlaceholderText(/Add a new task/);
  // ivedam reiksme
  fireEvent.change(inputEl, { target: { value: 'Do sports on Sunday' } });
  // gauti mygtuka
  const btnEl = screen.getByRole('button', { name: /add/i });
  // paspaudziam mygtuka
  fireEvent.click(btnEl);
  const todoAddedEl = screen.getByText('Do sports on Sunday');
  // Assert
  expect(todoAddedEl).toBeInTheDocument();
  expect(todoAddedEl).toHaveClass('todo-item');
});

function addToTodo(todoArr) {
  // ivedam reiksme, paspaudziam mygtuka cikle
  const inputEl = screen.getByPlaceholderText(/Add a new task/);
  // gauti mygtuka
  const btnEl = screen.getByRole('button', { name: /add/i });
  // ivedam reiksme

  todoArr.forEach((todo) => {
    fireEvent.change(inputEl, { target: { value: todo } });
    // paspaudziam mygtuka
    fireEvent.click(btnEl);
  });
}

it('Shoud add multiple todos to a list', () => {
  // taip pat kaip auksciau tik ivedam ir paspaudziam 3 kartus
  // vietoj rankinio ivedimo, pasidaryti funkcija kuri gauna masyva
  // ir iveda masyvo el reiksme ir paspaudzia mygtuka

  render(<MockTodo />);
  addToTodo(['one', 'two', 'three']);
  const todoAddedArr = screen.getAllByTestId('todo-item');
  // Assert
  expect(todoAddedArr).toHaveLength(3);
  //   expect(todoAddedEl).toHaveClass('todo-item');
});

it('Task should not have completed class when added to list', () => {
  render(<MockTodo />);
  addToTodo(['Do sports on Sunday']);
  const todoAddedEl = screen.getByText('Do sports on Sunday');
  // Assert

  expect(todoAddedEl).not.toHaveClass('todo-item-active');
});

test('Task should be gray when clicked (add a class)', () => {});
