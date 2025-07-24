Feature: Login
    Feature User Login work depending on the user credentials.

    Scenario: Sucessful User Login
    Given A user launch the Saucelabs login page
    When A user enters the username "standard_user", the password "secret_sauce", and clicks on the Login button
    Then A user will land at the inventory page