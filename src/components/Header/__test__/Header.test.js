import { render, screen } from '@testing-library/react';
import Header from './../Header';

describe('Header tests', () => {
  test('should render text passed as props', () => {
    render(<Header title="My header" />);
    const headerEl = screen.getByText(/my header/i);
    expect(headerEl).toBeInTheDocument();
  });

  it('Header should be a heading with text', () => {
    // Arrange
    render(<Header title="My header" />);
    //

    const headingEl = screen.getByRole('heading', { name: 'My header' });
    expect(headingEl).toBeInTheDocument();
  });
  // pagal nematoma title
  it('Should have a title "second"', () => {
    render(<Header title="My Header" />);
    const otherHeading = screen.getByTitle('second');
    expect(otherHeading).toBeInTheDocument();
  });

  // pagal tam skirta test id - nerekomenduojama

  it('Shoud render main title with id', () => {
    render(<Header title="My Header" />);
    const mainHeading = screen.getByTestId('main-title');
    expect(mainHeading).toBeInTheDocument();
  });
});
