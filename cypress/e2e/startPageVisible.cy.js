it ("Page is visible", () =>{
    Cypress.env('mobile')
    cy.visit('/');
    cy.get('#root').should("be.visible")
    cy.contains('Books list').should("be.visible");
    cy.contains('Log in').should("be.visible");
})