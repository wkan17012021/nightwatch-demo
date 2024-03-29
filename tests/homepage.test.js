const homePage = require("../pages/homePage");
// run specific tests on a case-by-case basis using tags like below. In terminal npx nightwatch --tag smoke-homepage
module.exports = {
    'tags': ['smoke-homepage'],
    "User can navigate to homepage and checks nav elements": function (browser) {
        var mainNavMenu = browser.page.homePage();

        const aboutUsLinkText = 'ABOUT US';
        const summitLinkText = 'THE SUMMIT';
        const communityLinkText = 'COMMUNITY';
        const eventsLinkText = 'EVENTS';
        const impactLinkText = 'IMPACT';
        const scholarshipsLinkText = 'SCHOLARSHIPS';
        const newsLinkText = 'NEWS';

        mainNavMenu.navigate()
        //.peform(() => {debugger})
            .waitForElementVisible('@megaMenu')
            .assert.textContains('@megaMenu', aboutUsLinkText, 'Test that ABOUT US exists in the header')
            .assert.textContains('@megaMenu', summitLinkText, 'Test that THE SUMMIT exists in the header')
            .assert.textContains('@megaMenu', communityLinkText, 'Test that COMMUNITY exists in the header')
            .assert.textContains('@megaMenu', eventsLinkText, 'Test that EVENTS exists in the header')
            .assert.textContains('@megaMenu', impactLinkText, 'Test that IMPACT exists in the header')
            .assert.textContains('@megaMenu', scholarshipsLinkText, 'Test that SCHOLARSHIPS exists in the header')
            .assert.textContains('@megaMenu', newsLinkText, 'Test that NEWS exists in the header')
            ;
    }
}