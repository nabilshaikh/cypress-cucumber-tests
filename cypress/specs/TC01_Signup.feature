Feature: User Registration

As a product manager, I want signup functionality to be implemented so that the user can register themselves before accessing their account.
    
    Scenario Outline: Create an account by leaving username as blank
        Given User visits '/signup' on '<viewport>' device
        And User chooses signup option
        When User skips username and enters the password as '123456789'
        And User clicks on Signup button
        Then User should see an error message as 'User name cannot be blank'
    
    Examples:

        | viewport |
        | desktop  |
        | mobile   |
    
    Scenario Outline: Create an account by entering whitespaces in the username
        Given User visits '/signup' on '<viewport>' device
        And User chooses signup option
        When User enters the username as 'test ' and password as '123456789'
        And User clicks on Signup button
        Then User should see an error message as 'User name cannot contain whitespaces'
    
    Examples:

        | viewport |
        | desktop  |
        | mobile   |
    
    Scenario Outline: Create an account by entering a password of length less than 8 characters (< 8)
        Given User visits '/signup' on '<viewport>' device
        And User chooses signup option
        When User enters the username as 'test' and password as '1234567'
        And User clicks on Signup button
        Then User should see an error message as 'Password cannot be less than 8 characters'
    
    Examples:

        | viewport |
        | desktop  |
        | mobile   |
    
    Scenario Outline: Create an account by entering a password of length greater than 32 characters (> 32)
        Given User visits '/signup' on '<viewport>' device
        And User chooses signup option
        When User enters the username as 'test' and password as '123456789123456789123456789123456789'
        And User clicks on Signup button
        Then User should see an error message as 'Password cannot be longer than 32 characters'
    
    Examples:

        | viewport |
        | desktop  |
        | mobile   |
    
    Scenario Outline: Create an account by not including numeric characters in a password
        Given User visits '/signup' on '<viewport>' device
        And User chooses signup option
        When User enters the username as 'test' and password as 'Test@OneTwoThree'
        And User clicks on Signup button
        Then User should see an error message as 'Password must contain numbers'
    
    Examples:

        | viewport |
        | desktop  |
        | mobile   |
    
    Scenario Outline: Create an account by not including uppercase letters in a password
        Given User visits '/signup' on '<viewport>' device
        And User chooses signup option
        When User enters the username as 'test' and password as 'test@1234'
        And User clicks on Signup button
        Then User should see an error message as 'Password must contain uppercase letters'
    
    Examples:

        | viewport |
        | desktop  |
        | mobile   |