it('Shows and autocomplete', () => {
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
