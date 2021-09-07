import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from './../FollowersList';

const MockFlist = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};
const mockResponse = {
  results: [
    {
      name: {
        first: 'James',
        last: 'Bond',
      },
      login: {
        username: 'zerozerozeven',
      },
      picture: {
        large: 'https://www.google.lt',
      },
    },
  ],
};

const server = setupServer(
  rest.get('https://randomuser.me/api/', (req, res, ctx) => {
    return res(ctx.json(mockResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Async testing', () => {
  // it('Renders Followers on the screen', async () => {
  //   render(<MockFlist />);
  //   // screen.debug();
  //   const contactElArr = await screen.findAllByTestId(/contact-el-/);
  //   expect(contactElArr).not.toHaveLength(0);
  //   expect(contactElArr).toHaveLength(2);
  //   // expect(contactElArr).toBeInTheDocument();
  // });

  it('Renders one follower card on the screen', async () => {
    render(<MockFlist />);
    let contactEl;
    await waitFor(() => {
      contactEl = screen.getByTestId(/contact-el-0/);
    });
    // screen.debug();
    // const contactEl = await screen.findByTestId(/contact-el-0/);

    expect(contactEl).toBeInTheDocument();
  });
});
