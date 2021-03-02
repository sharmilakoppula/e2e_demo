@smoke
Feature: Job location search shall suggest relevant locations
Background: User visits GreenCommute application
Scenario: User shall be able to search with a valid location C45
Given User is on job location page
When User enters text in Where do you want to work? text field
Then Matching locations shall show up in the suggestions list