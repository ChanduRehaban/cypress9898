
describe('Search Movie Component', () => {
  beforeEach(() => {
    // Before each test, visit the search movie page
    cy.visit('http://localhost:4200/api/v1.0/moviebooking/search'); 
  });

  it('should display the search movie form', () => {
    cy.get('app-navbar').should('exist');
    cy.contains('Search Movie').should('exist');
    cy.get('form').should('exist');
    cy.get('input[name="movieName"]').should('exist');
    cy.get('button[type="submit"]').should('contain', 'Search');
  });

  it('should show an error message for empty search submission', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('Enter Movie Name').should('be.visible');
  });

  it('should display movie results after successful search', () => {
    // Replace this value with a valid movie name for testing
    const movieName = 'Avengers';

    // Mock a successful search response using cy.intercept()
    cy.intercept('GET', '/api/v1.0/moviebooking/search?movieName=' + movieName, {
      statusCode: 200,
      body: [
        {
          position: 1,
          movieName: 'Avengers Endgame',
          theaterName: 'Inox',
          ticketStatus: 'Available',
        },
      ],
    }).as('searchRequest');

    cy.get('input[name="movieName"]').type(movieName);
    cy.get('button[type="submit"]').click();
  });
  it('should display movie results after successful search', () => {

  });
  

  it('should display "Book Ticket" button if the user is logged in', () => {
    // Replace this value with a valid user token (for a logged-in user) for testing
    const userToken = 'validUserToken';

    // Set the user token to simulate a logged-in state
    cy.window().then((win) => {
      win.localStorage.setItem('token', userToken);
    });

    // Mock a successful search response using cy.intercept()
    cy.intercept('GET', '/api/v1.0/moviebooking/search?movieName=', {
      statusCode: 200,
      body: [],
    }).as('searchRequest');

    cy.get('input[name="movieName"]').type('Avengers Endgame');
    cy.get('button[type="submit"]').click();
  });

});
