Feature: Funds Transfer

As a product manager, I want deposit and withdrawal functionalities to be implemented so that the user can perform their money transactions through Hoge Bank facility.
    
    Background: Login to Hoge Bank
        * User creates an account by entering the username as 'test' and password as 'Test@1234'

    Scenario Outline: Verify transaction fee while depositing money
        Given User visits '/portfolio' on 'desktop' device
        And User chooses to deposit an amount
        When User enters the amount of '<value>'
        Then Users find the transaction fee to be the '30%' of the intended deposit amount, followed by the final deposit amount after deduction
    
    Examples:

        | value                        |
        | 10000                        |
        | 100.3434444                  |
        | 100567456700.342343430023444 |
    
    Scenario Outline: Verify transaction fee while withdrawing money
        Given User visits '/portfolio' on 'desktop' device
        And User chooses to withdraw an amount
        When User enters the amount of '<value>'
        Then Users find the transaction fee to be the '30%' of the intended withdrawal amount, followed by the final withdrawal amount after deduction
    
    Examples:

        | value                        |
        | 10000                        |
        | 100.3434444                  |
        | 100567456700.342343430023444 |
    
    Scenario: Verify account balance to be updated within 10 seconds
        Given User visits '/portfolio' on 'desktop' device
        And User sees the balance of '10000.00'
        When User deposit an amount of '10000'
        Then User find the total balance '17000.00' to get updated within 10 seconds