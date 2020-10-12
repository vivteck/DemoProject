package StepDefinitions;

import TestBase.BaseClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GooglePageTest extends BaseClass {

    private final String URL = "www.google.co.uk";

    @Given("^I open Chrome browser and enter url$")
    public void i_open_Chrome_browser_and_enter_url() throws InterruptedException {
        initialization();
        System.out.println("Driver initialization completed");
        Thread.sleep(5000);
        driver.get(URL);
    }

    @When("^I click sigin link and click on use another account$")
    public void i_click_sigin_link_and_click_on_use_another_account() {
        GooglePage.signinBtn();
        GooglePage.useAnotherAcBtn();
    }

    @Then("^I enter redspireglasgow@gmail\\.com$")
    public void i_enter_redspireglasgow_gmail_com(String emailid) {
        GooglePage.emailTxtBox(emailid);

    }

    @And("^I click EmailNext button$")
    public void I_click_EmailNext_button() {
        GooglePage.nextEmailBtn();
    }

    @Then("^I enter Test(\\d+)@$")
    public void i_enter_Test(String password) {
        GooglePage.passwordTxtBox(password);
    }

        @And("^I click PassNext button$")
        public void I_click_PassNext_button () {
            GooglePage.nextPassBtn();
        }

        @Then("^I click on gmail link$")
        public void i_click_on_gmail_link () {
            GooglePage.gmailLink();
        }

    @Then("I close the browser")
    public void iCloseTheBrowser() {
        driver.quit();
    }
}

