import { BrowserRouter } from 'react-router-dom';
import TodoFooter from './../TodoFooter';
import { render, screen } from '@testing-library/react';

function MockTodoFooter({ numberOfIncompleteTasks }) {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
}

describe('Footer tests', () => {
  // Hooks

  beforeAll(() => {
    // vyksta pries vygdant visus testus esancius siame describe bloke
    console.log('beforeall');
  });

  beforeEach(() => {
    // vyksta pries vygdant kiekviena testa siame describe bloke
    console.log('beforeEach');
  });
  afterEach(() => {
    // vyksta po kiekvieno testo siame describe bloke
    console.log('afterEach');
  });
  afterAll(() => {
    // vyksta vygdant po visais testais siame describe bloke
    console.log('afterEach');
  });

  it('Should render correct amount of tasks', () => {
    // Arrange
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);

    // act

    // assert

    const paragEl = screen.getByText(/5 tasks left/i);
    expect(paragEl).toBeInTheDocument();
  });
  it('Should render correct single item ending', () => {
    // Arrange
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    // act

    // assert

    const paragEl = screen.getByText(/1 task left/i);
    expect(paragEl).toBeInTheDocument();
  });
  it('Should render correct html el p', () => {
    // Arrange
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    // act

    // assert

    const paragEl = screen.getByText(/1 task left/i);
    expect(paragEl).toContainHTML('p');
  });
});
