import { DemoangularPage } from './app.po';

describe('demoangular App', () => {
  let page: DemoangularPage;

  beforeEach(() => {
    page = new DemoangularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
