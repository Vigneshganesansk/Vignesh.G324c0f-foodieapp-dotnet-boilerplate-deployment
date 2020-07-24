import { SearchPage } from './search.po';
import { browser, By } from 'protractor';

describe('frontend App', () => {
    let page: SearchPage;

    beforeEach(() => {
      page = new SearchPage();
    });
    it('Search: should re-route to register when not Logged In', () => {
        page.navigateTo().then(() => {
          browser.waitForAngular();
          expect(browser.driver.getCurrentUrl()).toMatch('/register');
        });
      });
      it('Search: should navigate to search after login', () => {
        page.navigateTo();
        var userNameField = browser.driver.findElement(By.id('username'));
        var userPassField = browser.driver.findElement(By.id('password'));
        var userLoginBtn  = browser.driver.findElement(By.id('loginbtn'));
        var favTitle = browser.driver.findElement(By.id('searchTitle'))
    
        userNameField.sendKeys('vignesh');
        userPassField.sendKeys('password');
    
        userLoginBtn.click().then(() => {
          browser.waitForAngular();
          favTitle.click().then(()=>{ 
              browser.waitForAngular();
              expect(browser.driver.getCurrentUrl()).toMatch('/search');
          })
        });
      });
    
    
    
});