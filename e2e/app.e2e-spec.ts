import { EnsagradPage } from './app.po';

describe('ensagrad App', function() {
  let page: EnsagradPage;

  beforeEach(() => {
    page = new EnsagradPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
