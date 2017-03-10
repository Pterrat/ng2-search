import { Ng2SearchPage } from './app.po';

describe('ng2-search App', () => {
  let page: Ng2SearchPage;

  beforeEach(() => {
    page = new Ng2SearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
