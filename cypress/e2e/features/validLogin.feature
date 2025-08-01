Feature: Login with valid user

  Scenario: User logs in successfully
    Given user is on the login page
    When user enter the login credentials
    And click on the "Entrar" button
    Then I should be redirected to the main page