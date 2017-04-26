import { browser, element, by } from 'protractor';

export class TheEisenhowerBoxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('teb-root h1')).getText();
  }
}
