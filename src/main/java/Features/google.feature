Feature: Validate Google user id and password and search for Red website and browse


  Scenario Outline: validate Google user id and password and check email
    Given I open Chrome browser and enter url
#    When  I click sigin link and click on use another account
#    Then  I enter <emailid>
#    And I click EmailNext button
#    Then  I enter <password>
#    And I click PassNext button
#    Then  I click on gmail link
    Then I close the browser
    Examples:
      |emailid |password|
      |redspireglasgow@gmail.com |Test1234@|