Feature: New user registration on ServeRest

  Scenario: A new user successfully registers
    Given I am on the ServeRest login page
    When I click on the "Cadastre-se" link
    And I enter the name "Alex Kidd", email "alex.kidd@gmail.com", and password "MasterSystem1998"
    Then I click the "cadastrar" button and redirected to the home page