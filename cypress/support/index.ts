declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command for selecting items in a mui dropdown
         * @param option Pass in the string of the option you want selected
         * @example cy.get(selector).muiSelect("foobar")
         */
        muiSelect(option?: string): Chainable<JQuery<HTMLElement>>;
      }
    }
  }

  export {};
