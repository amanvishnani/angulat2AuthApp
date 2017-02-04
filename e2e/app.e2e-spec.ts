import { Angular2AuthPage } from './app.po';

describe('angular2-auth App', function() {
  let page: Angular2AuthPage;

  beforeEach(() => {
    page = new Angular2AuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
