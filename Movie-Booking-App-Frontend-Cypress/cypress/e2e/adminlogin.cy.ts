
describe('LoginComponent', () => {
    beforeEach(() => {
      // Before each test, visit the login page
      cy.visit('http://localhost:4200/api/v1.0/moviebooking/login'); // Replace '/' with the actual route of your login page
    });
  
    it('should display the login form', () => {
      cy.get('app-navbar').should('exist');
      cy.get('mat-card').should('be.visible');
      cy.get('h1.font-style').should('contain', 'Login Here');
      cy.get('mat-form-field').should('have.length', 2);
      cy.get('button[type="submit"]').should('be.visible').and('have.text', 'Login');
    });
  
    it('should show a valid credentials', () => {
  
      cy.get('input[name="username"]').type("seeni");
      cy.get('input[name="password"]').type("password");
      cy.get('button[type="submit"]').click();
      cy.url().should('contain', 'api/v1.0/moviebooking/update');
    });
  });
  