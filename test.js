describe('First page', function () {

  it('Text message is correct', function () {
    browser.get('http://localhost:8080');
    expect(element(by.id('message')).getText()).toEqual('Hello Protractor world!');
  });

});
