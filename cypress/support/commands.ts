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


Cypress.Commands.add(
    'muiSelect',
    { prevSubject: 'element' },
    (subject, option: string) => {
      const muiDropdownOptions = (option): string =>
        `[role="listbox"] li:contains("${option}")`;
      cy.wrap(subject).trigger('mousedown', { button: 0 }); // open dropdown menu
      return cy.get(muiDropdownOptions(option)).first().click({ force: true });
  },
);

