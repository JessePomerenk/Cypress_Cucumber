import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import { FfcPage } from "cypress/support/page-objects/ffc.page"

const ffcPage = new FfcPage()

Given("User is on the FFC home page", () => {
    ffcPage.visit()
});

When('They click on the {string} button in the {string} menu', (submenuLabel, menuLabel) => {
    ffcPage.clickSubMenuItem(menuLabel, submenuLabel)
});

Then("The should see {int} steps", (stepCount:number) =>{
    cy.log("Expected Steps:" + stepCount)
    ffcPage.validateCareerSteps()
})
