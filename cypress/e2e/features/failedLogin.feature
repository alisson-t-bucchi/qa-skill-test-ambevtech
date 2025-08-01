Feature: Login with invalid credentials

  Scenario: User try login with invalid e-mail and password
    Given user opens the login page
    When the user inserts incorrect email "invalidEmail@gmail.com" and password "admin123"
    And the user clicks the "Entrar" button
    Then an error message should be displayed