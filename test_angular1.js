//test_angular1.js
describe('Angular by Example', function() {
	it('Lets me click to view', function() {
		browser.waitForAngularEnabled(true);
		browser.get('http://revillweb.github.io/angularjs-by-example/#/');
		
		var viewit = element(by.css('.tutorials .ng-scope:nth-child(1) .btn-primary'));
		
		// click the button
		viewit.click();
	});
	
});