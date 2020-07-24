import { browser, by, element } from 'protractor';

export class SearchPage {
  navigateTo() {
    return browser.get('/search');
  }
}


