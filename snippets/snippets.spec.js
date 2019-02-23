const snippets = require('./snippets.json');

describe('Snippets', () => {
  it('should not be empty', () => {
    const keys = Object.keys(snippets);

    expect(keys.length).toBeGreaterThan(0);
  });
});
