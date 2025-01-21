import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../../support/page-objects/home.page";

const homePage = new HomePage()

Given("User is on the home page", () =>{
    homePage.visit()
})

When("They search for {string}", (item:string)  => {
    homePage.inputSearch(item);
}

)
Then("They should see a link to {string}", (place:string) => {
    homePage.validateLink(place);
})

