
describe('Registration Component', () => {
    beforeEach(() => {
      // Before each test, visit the registration page
      cy.visit('http://localhost:4200/api/v1.0/moviebooking/forgot'); // Replace '/' with the actual route of your registration page
    });
  
    

  
    it('should password is changed', () => {
      // Replace these values with valid registration data for testing
      const username = 'vijay';
     
      const password = 'password';
  
      cy.get('input[name="username"]').type(username);
     
     
      cy.get('input[name="password"]').type(password);
      
  
      cy.get('button').contains('Change Password').click();
  

    });
  

  });
  