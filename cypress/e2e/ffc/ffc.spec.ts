import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import { FfcPage } from "cypress/support/page-objects/ffc.page"

const ffcPage = new FfcPage(this)

Given("User is on the FFC home page", () => {
    ffcPage.visit()
});

When('They click on the {string} button in the {string} menu', (submenuLabel, menuLabel) => {
    ffcPage.clickSubMenuItem(submenuLabel, menuLabel)
});

Then("The should see {int} steps", (stepCount:string) =>{
    cy.log("Expected Steps:" + stepCount)
    ffcPage.validateCareerSteps()
})

Then("The executive names should appear in order", () => {
    
});
