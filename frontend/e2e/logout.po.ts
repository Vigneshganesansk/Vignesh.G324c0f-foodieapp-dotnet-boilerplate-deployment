import { browser, by, element } from 'protractor';

export class LogoutPage {
  navigateTo() {
    return browser.get('/');
  }
  
  getLogoutButton(){
    return element(by.id('logoutBtn'));
  }

}