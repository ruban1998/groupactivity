Feature: FundTransfer

    Scenario: User login into page and do fund transfer
    Given user enters username & password
    When user click FundTransfer
    Then user fills the fund transfer form
    Then user enter transcation authorisation code
    Then after successfull transcation user logouts