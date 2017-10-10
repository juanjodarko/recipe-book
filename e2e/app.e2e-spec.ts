import { RecipieBookPage } from './app.po';

describe('recipie-book App', () => {
  let page: RecipieBookPage;

  beforeEach(() => {
    page = new RecipieBookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
