
describe('Registration Component', () => {
  beforeEach(() => {
    // Before each test, visit the registration page
    cy.visit('http://localhost:4200/api/v1.0/moviebooking/register'); // Replace '/' with the actual route of your registration page
  });

  it('should display the registration form', () => {
    cy.get('app-navbar').should('exist');
    cy.get('h1.text-center').should('contain', 'Get Started with Registration');
    cy.get('form').should('exist');
    cy.get('input[name="username"]').should('exist');
    cy.get('input[name="firstName"]').should('exist');
    cy.get('input[name="lastName"]').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('input[name="confirmPassword"]').should('exist');
    cy.get('button[type="submit"]').should('contain', 'Register');
    cy.get('button[type="reset"]').should('contain', 'Reset');
    cy.contains('If Already User then ...').should('exist');
    cy.contains('Login').should('have.attr', 'href', 'api/v1.0/moviebooking/login');
  });

  it('should login id is already taken', () => {
    // Replace these values with valid registration data for testing
    const username = 'seeni';
    const firstName = 'Seenivasan';
    const lastName = 'S R';
    const email = 'seeni@gmail.com';
    const password = 'password';

    cy.get('input[name="username"]').type(username);
    cy.get('input[name="firstName"]').type(firstName);
    cy.get('input[name="lastName"]').type(lastName);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="admin"]').check().should('be.checked');
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="confirmPassword"]').type(password);

    cy.get('button[type="submit"]').click();

  });

});

