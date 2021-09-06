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
}

it('Shoud add multiple todos to a list', () => {
  // taip pat kaip auksciau tik ivedam ir paspaudziam 3 kartus
  // vietoj rankinio ivedimo, pasidaryti funkcija kuri gauna masyva
  // ir iveda masyvo el reiksme ir paspaudzia mygtuka
});
