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

it('Shows an autocomplete', () => {
  const dropdown = document.querySelector('.dropdown');
  //   using chai to handle assertions
  expect(dropdown.className).not.to.include('is-active');
});

it('After search, dropdown opens', () => {});
