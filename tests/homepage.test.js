const homePage = require("../pages/homePage");

module.exports = {
    "User can navigate to homepage and checks nav elements": function (browser) {
        var mainNavMenu = browser.page.homePage();

        const aboutUsLinkText = 'ABOUT US';
        const summitLinkText = 'THE SUMMIT';
        const communityLinkText = 'COMMUNITY';
        const eventsLinkText = 'EVENTS';
        const impactLinkText = 'IMPACT';
        const programmesLinkText = 'PROGRAMMES';
        const mediaLinkText = 'MEDIA';

        mainNavMenu.navigate()
            .waitForElementVisible('@megaMenu')
            .assert.textContains('@megaMenu', aboutUsLinkText, 'Test that ABOUT US exists in the header')
            .pause(500)
            .assert.textContains('@megaMenu', summitLinkText, 'Test that THE SUMMIT exists in the header')
            .pause(500)
            .assert.textContains('@megaMenu', communityLinkText, 'Test that COMMUNITY exists in the header')
            .pause(500)
            .assert.textContains('@megaMenu', eventsLinkText, 'Test that EVENTS exists in the header')
            .pause(500)
            .assert.textContains('@megaMenu', impactLinkText, 'Test that IMPACT exists in the header')
            .pause(500)
            .assert.textContains('@megaMenu', programmesLinkText, 'Test that PROGRAMMES exists in the header')
            .pause(500)
            .assert.textContains('@megaMenu', mediaLinkText, 'Test that MEDIA exists in the header')
            .pause(500)
            ;
    }
}