
package TestBase;
//import Pages.SubmitPage;
import Pages.GooglePage;
import Util.testUtil;

//import Pages.LoginPage;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class BaseClass {

    public static WebDriver driver;
    //public static Properties prop;
    public static EventFiringWebDriver e_driver;
    public static GooglePage GooglePage;

    public static void initialization() {

//        WebDriverManager.chromedriver().setup();
        System.setProperty("webdriver.chrome.driver", "chromedriver86.exe");
//        driver = new ChromeDriver();
        driver = new ChromeDriver();
//        driver.get("www.google.co.uk");
//        e_driver = new EventFiringWebDriver(driver);
//        // Now create object of EventListerHandler to register it with EventFiringWebDriver
//
//        driver = e_driver;
        driver.manage().window().maximize();
//        GooglePage = new GooglePage(driver);
//        driver.manage().deleteAllCookies();
//        driver.manage().timeouts().pageLoadTimeout(testUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
//        driver.manage().timeouts().implicitlyWait(testUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
    }

    public String getPageTitle() {
        return driver.getTitle();
    }

    //public static void tearDown() {
    //    driver.quit();
   // }

    // public void pageWait() throws InterruptedException {
    //   Thread.sleep(2000);

}