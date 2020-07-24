import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-toolbar a')).getText();
  }

  getRegisterButton(){
    return element(by.css('app-register button'));
  }

  getSignUpText(){
    return element(by.css('app-register h2')).getText();
  }

  getLoginButton(){
    return element(by.css('app-toolbar form button'));
  }

//   async fillCredentials(): Promise<void> {
//     await browser.driver.findElement(by.id("username")).sendKeys("Vignesh");
//     await browser.driver.findElement(by.id("password")).sendKeys("password");
//     await this.getLoginButton().click();
//  }

 fillCredentials(){
  browser.driver.findElement(by.id("username")).sendKeys("Vignesh");
  browser.driver.findElement(by.id("password")).sendKeys("password");
}
  
}
