
describe('All Movies Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/api/v1.0/moviebooking/all'); // Replace '/all-movies' with the actual route of your "All Movies" page
  });

  it('should display the "All Movies" table', () => {
    cy.contains('All Movies').should('exist');
    cy.get('table').should('exist');
  });

});


