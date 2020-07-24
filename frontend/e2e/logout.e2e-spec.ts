import { LogoutPage } from './logout.po';
import { browser, By } from 'protractor';

describe('frontend App', () => {
    let page: LogoutPage;

    beforeEach(() => {
      page = new LogoutPage();
    });
    // it('Logout: should display logout button after login', () => {
    //     page.navigateTo().then(() => {
    //       browser.waitForAngular();
    //       expect(browser.driver.getCurrentUrl()).toMatch('/register');
    //     });
    //   });
      it('Logout: should display logout button after login', () => {
        page.navigateTo();
        var userNameField = browser.driver.findElement(By.id('username'));
        var userPassField = browser.driver.findElement(By.id('password'));
        var userLoginBtn  = browser.driver.findElement(By.id('loginbtn'));
        // var logoutButton = browser.driver.findElement(By.id('logoutBtn'))
    
        userNameField.sendKeys('vignesh');
        userPassField.sendKeys('password');
    
        userLoginBtn.click().then(() => {
          browser.waitForAngular();
          expect(page.getLogoutButton().getText()).toEqual('Logout');
        //   logoutButton.click().then(()=>{ 
        //       browser.waitForAngular();
        //       ;
        //   })
        });
      });
    
    
    
});