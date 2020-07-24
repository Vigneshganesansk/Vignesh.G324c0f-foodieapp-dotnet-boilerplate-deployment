import { browser, by, element } from 'protractor';

export class FavoritePage {
  navigateTo() {
    return browser.get('/favourite');
  }
}


