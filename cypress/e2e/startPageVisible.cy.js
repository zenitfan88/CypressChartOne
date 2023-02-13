it ("Page is visible", () =>{
    cy.visit('/');
    cy.get('#root').should("be.visible")
    cy.contains('Books list').should("be.visible");
    cy.contains('Log in').should("be.visible");
})