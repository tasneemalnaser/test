/// <reference types="cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => { return false; });
const expectedcurrency="SAR";
const expectedAttribute="lang";
const expectedLanguage="en";

describe('Test Cases', () => {
it.skip('checking the currency', () => {
  cy.visit('https://global.almosafer.com/en');
  cy.get('.cta__saudi').click();
  cy.get('[data-testid="Header__CurrencySelector"]').invoke('text').should('include',expectedcurrency);
});

it.skip('checking the language', () => {
  cy.visit('https://global.almosafer.com/en');
  cy.get('.cta__saudi').click();
  cy.get('html').should('have.attr',expectedAttribute,expectedLanguage);  
});
it('RANDOM',()=>{
  let websites=["https://global.almosafer.com/ar",
  "https://global.almosafer.com/en"];
  
  let Randomindex=Math.floor(Math.random()*websites.length);
  cy.visit(websites[Randomindex]); 
  cy.get('.cta__saudi').click();

  cy.get('#uncontrolled-tab-example-tab-hotels > .sc-jJkQYJ').click();

  if(Randomindex==0)
  {
    cy.get('[data-testid="AutoCompleteInput"]').type("دبي");
  }
  else{
    cy.get('[data-testid="AutoCompleteInput"]').type("dubai");
  }
})

});