import { TheEisenhowerBoxPage } from './app.po';

describe('the-eisenhower-box App', () => {
  let page: TheEisenhowerBoxPage;

  beforeEach(() => {
    page = new TheEisenhowerBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('teb works!');
  });
});
