import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://bc15-green-commute.dev-apps.io/'



    Given('User is on job location page', () => {
            cy.visit(url)
            cy.contains('Skip').click()
    })
    
    When('User enters text in Where do you want to work? text field', () => {
            cy.get("input[placeholder='Enter your job location']").type("Hyderabad")
    })
    
    Then('Matching locations shall show up in the suggestions list', () => {
            cy.contains('Hyderabad, Telangana, India')
    })

