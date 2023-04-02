describe('GenreList component', () => {
    it('should render all genres passed in props', () => {
      cy.visit('/');
      cy.get('.genresList li').should('have.length', 4);
    });
  });
  