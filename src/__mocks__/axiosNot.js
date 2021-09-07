const mockResponse = {
  data: {
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
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
