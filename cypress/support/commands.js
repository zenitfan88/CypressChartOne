// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (login, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(login);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("upload", (title, discription, author, titlePictures, bookFile) => {
  cy.contains('Add new').click();
  cy.get('#title').type(title);
  cy.get('#description').type(discription);

  cy.get('#fileCover').attachFile(titlePictures);
  cy.get('#fileBook').attachFile(bookFile);

  cy.get('#authors').type(author);
  cy.contains('Submit').click();
});

Cypress.Commands.add("delete", () => {
  cy.contains('Delete from favorite').click();
  cy.contains('Add to favorite').should("be.visible");
  cy.get('h4').click();
});

Cypress.Commands.add("add", () => {
  cy.contains('Add to favorite').click();
  cy.contains('Delete from favorite').should("be.visible");  
  cy.get('h4').click();
});

import 'cypress-file-upload'