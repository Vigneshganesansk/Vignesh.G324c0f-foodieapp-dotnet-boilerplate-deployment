import { FavoritePage } from './favourite.po';
import { browser, By } from 'protractor';

describe('frontend App', () => {
    let page: FavoritePage;

    beforeEach(() => {
      page = new FavoritePage();
    });
    it('Favorites: should re-route to register when not Logged In', () => {
        page.navigateTo().then(() => {
          browser.waitForAngular();
          expect(browser.driver.getCurrentUrl()).toMatch('/register');
        });
      });
      it('Favorites: should navigate to favorite after login', () => {
        page.navigateTo();
        var userNameField = browser.driver.findElement(By.id('username'));
        var userPassField = browser.driver.findElement(By.id('password'));
        var userLoginBtn  = browser.driver.findElement(By.id('loginbtn'));
        var favTitle = browser.driver.findElement(By.id('favTitle'))
    
        userNameField.sendKeys('vignesh');
        userPassField.sendKeys('password');
    
        userLoginBtn.click().then(() => {
          browser.waitForAngular();
          favTitle.click().then(()=>{ 
              browser.waitForAngular();
              expect(browser.driver.getCurrentUrl()).toMatch('/favourite');
          })
        });
      });
    
    
    
});