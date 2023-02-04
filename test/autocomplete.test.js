// func to create a timer for tests
const waitFor = (selector) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (document.querySelector(selector)) {
        clearInterval(interval);
        clearTimeout(timeout);
        resolve();
      }
    }, 30);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      reject();
    }, 2000);
  });
};

beforeEach(() => {
  document.querySelector('#target').innerHTML = '';
  createAutoComplete({
    root: document.querySelector('#target'),
    fetchData() {
      return [
        { Title: 'Test Movie' },
        { Title: 'Test Movie 1' },
        { Title: 'Test Movie 2' },
      ];
    },
    renderOption(movie) {
      return movie.Title;
    },
  });
});

it('Dropdown starts closed', () => {
  const dropdown = document.querySelector('.dropdown');
  //   using chai to handle assertions
  expect(dropdown.className).not.to.include('is-active');
});

it('After search, dropdown opens', async () => {
  const input = document.querySelector('input');
  input.value = 'Test Movie';
  input.dispatchEvent(new Event('input'));

  // pausing test to wait for debounce
  await waitFor('.dropdown-item');

  const dropdown = document.querySelector('.dropdown');
  expect(dropdown.className).to.include('is-active');
});
