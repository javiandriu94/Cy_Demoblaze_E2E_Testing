Feature: Demoblaze Authentication

  Scenario: User can create an account with valid credentials
    Given the user needs to create a new account
    When register a new account with the following credentials
    Then should it account be created successfully

  Scenario: User cannot create an account with an existing username
    Given the user needs to create a new account
    When register a new account with existing username
    Then should it display an error message

   