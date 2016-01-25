var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Index page', function () {

  it('should display header correct', function () {
    browser.get('http://localhost:8080');
    expect(element(by.id('header')).getText()).to.eventually.equal('Gulp with Protractor');
  });

  it('should have two posts', function () {
    var posts = element.all(by.repeater('post in vm.posts'));
    expect(posts.count()).to.eventually.equal(2);
  });

});
