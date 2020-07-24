import { AppPage } from './app.po';
import { browser, by, element, protractor } from 'protractor';

describe('frontend App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display nav bar', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Foodie');
  });

  it('should display register button', () => {
    page.navigateTo();
    expect(page.getRegisterButton().getText()).toEqual('Register');
  });

  it('should display signup text on register click', () => {
    page.navigateTo();
    page.getRegisterButton().click();
    expect(page.getSignUpText()).toEqual('Sign up');
  });

  it('should restaurant cards', () => {
    page.navigateTo();
    expect(page.getRegisterButton().getText()).toEqual('Register');
  });


  it('should have login button', () => {
    page.navigateTo();
    expect(page.getLoginButton().getText()).toEqual('Login');
  });
//   it("when login is successful", async() => {
//     await page.fillCredentials();

//     // wait until redirected to new page
//     const EC = protractor.ExpectedConditions;
//     const elm = element(by.css("div.card"));
//     await browser.wait(EC.presenceOf(elm), 40000);
//     expect();
// });


  it('login should be successful', () => {
    page.fillCredentials();
    page.getLoginButton().click().then(() => {
      browser.waitForAngular();
      expect(browser.driver.getCurrentUrl()).toMatch('');
    });
  })



});
