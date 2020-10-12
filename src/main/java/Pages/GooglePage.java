package Pages;

import TestBase.BaseClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class GooglePage extends BaseClass {
    WebDriver driver;

    @FindBy(xpath = "//a[@id='gb_70']")
    public WebElement signinBtn;

    @FindBy(xpath = "/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/span[1]/section[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/div[1]")
    public WebElement useAnotherAcBtn;

    @FindBy(xpath = "//input[@id='identifierId']")
    public WebElement emailTxtBox;

    @FindBy(xpath = "//div[@class='VfPpkd-RLmnJb']")
    public WebElement nextEmailBtn;

    @FindBy(xpath = "//input[@name='password']")
    public WebElement passwordTxtBox;

    @FindBy(xpath = "//div[@id='passwordNext']//div[2]")
    public WebElement nextPassBtn;

    @FindBy(xpath = "//a[contains(text(),'Gmail')]")
    public WebElement gmailLink;

    public GooglePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }

    public void signinBtn(){signinBtn.click();}
    public void useAnotherAcBtn(){useAnotherAcBtn.click();}
    public void emailTxtBox(String emailid) {emailTxtBox.sendKeys(emailid);}
    public void nextEmailBtn() {nextEmailBtn.click(); }
    public void passwordTxtBox(String password) {passwordTxtBox.sendKeys(password);}
    public void nextPassBtn() {nextPassBtn.click();}
    public void gmailLink() {gmailLink.click();}

}
