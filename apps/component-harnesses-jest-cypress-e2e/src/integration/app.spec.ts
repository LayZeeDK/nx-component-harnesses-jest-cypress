describe('component-harnesses-jest-cypress', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    cy.get('[cy-data="weekday-picker"] .mat-form-field-flex').click();

    cy.get('[cy-data="Friday-option"]').as('fridayOption');

    cy.get('@fridayOption').find('.mat-option-text').should('contain.text', 'Friday');

    cy.get('@fridayOption').click();

    cy.get('.mat-select-value-text span').should('contain.text', 'Friday');
  });
});
