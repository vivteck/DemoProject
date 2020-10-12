$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("google.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Google user id and password and search for Red website and browse",
  "description": "",
  "id": "validate-google-user-id-and-password-and-search-for-red-website-and-browse",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "validate Google user id and password and check email",
  "description": "",
  "id": "validate-google-user-id-and-password-and-search-for-red-website-and-browse;validate-google-user-id-and-password-and-check-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open Chrome browser and enter url",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#    When  I click sigin link and click on use another account"
    },
    {
      "line": 7,
      "value": "#    Then  I enter \u003cemailid\u003e"
    },
    {
      "line": 8,
      "value": "#    And I click EmailNext button"
    },
    {
      "line": 9,
      "value": "#    Then  I enter \u003cpassword\u003e"
    },
    {
      "line": 10,
      "value": "#    And I click PassNext button"
    },
    {
      "line": 11,
      "value": "#    Then  I click on gmail link"
    }
  ],
  "line": 12,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "validate-google-user-id-and-password-and-search-for-red-website-and-browse;validate-google-user-id-and-password-and-check-email;",
  "rows": [
    {
      "cells": [
        "emailid",
        "password"
      ],
      "line": 14,
      "id": "validate-google-user-id-and-password-and-search-for-red-website-and-browse;validate-google-user-id-and-password-and-check-email;;1"
    },
    {
      "cells": [
        "redspireglasgow@gmail.com",
        "Test1234@"
      ],
      "line": 15,
      "id": "validate-google-user-id-and-password-and-search-for-red-website-and-browse;validate-google-user-id-and-password-and-check-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "validate Google user id and password and check email",
  "description": "",
  "id": "validate-google-user-id-and-password-and-search-for-red-website-and-browse;validate-google-user-id-and-password-and-check-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I open Chrome browser and enter url",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#    When  I click sigin link and click on use another account"
    },
    {
      "line": 7,
      "value": "#    Then  I enter \u003cemailid\u003e"
    },
    {
      "line": 8,
      "value": "#    And I click EmailNext button"
    },
    {
      "line": 9,
      "value": "#    Then  I enter \u003cpassword\u003e"
    },
    {
      "line": 10,
      "value": "#    And I click PassNext button"
    },
    {
      "line": 11,
      "value": "#    Then  I click on gmail link"
    }
  ],
  "line": 12,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "GooglePageTest.i_open_Chrome_browser_and_enter_url()"
});
formatter.result({
  "duration": 10881221200,
  "error_message": "org.openqa.selenium.InvalidArgumentException: invalid argument\n  (Session info: chrome\u003d86.0.4240.75)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027REDSPIRESP022\u0027, ip: \u0027192.168.1.90\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\VIVEKK~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52269}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 9d630aea94e263f11c0c7e0a3a6a6a6c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat StepDefinitions.GooglePageTest.i_open_Chrome_browser_and_enter_url(GooglePageTest.java:18)\r\n\tat ✽.Given I open Chrome browser and enter url(google.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GooglePageTest.iCloseTheBrowser()"
});
formatter.result({
  "status": "skipped"
});
});