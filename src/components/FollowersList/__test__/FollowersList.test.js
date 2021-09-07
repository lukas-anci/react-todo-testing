import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from './../FollowersList';

const MockFlist = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe('Async testing', () => {
  it('Renders Followers on the screen', async () => {
    render(<MockFlist />);
    // screen.debug();
    const contactElArr = await screen.findAllByTestId(/contact-el-/);
    expect(contactElArr).not.toHaveLength(0);
    expect(contactElArr).toHaveLength(1);
    // expect(contactElArr).toBeInTheDocument();
  });

  it('Renders one follower card on the screen', async () => {
    render(<MockFlist />);
    // screen.debug();
    const contactEl = await screen.findByTestId(/contact-el-0/);

    expect(contactEl).toBeInTheDocument();
  });
});
