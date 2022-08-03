module.exports = {
    "User can navigate to scholarships page and open faq accordion": function (browser) {
        //.execute() is not considered a function when chained to page obj. Place all selectors and URL in the test page instead. Execute() is required to scroll the page down so the faq accordion is visible in the screen. The coordinates are trial & error- Nightwatch should have a method that auto scrolls the element into view.
        var scholarship = browser.page.scholarships();

        // const gdprbtn = '#gdpr-agree';
        const faqTitle = '#accordion > div';

        scholarship.navigate()
        // .waitForElementVisible('@gdprbtn')
        // .click('@gdprbtn');

        scholarship.api.execute('scrollTo(500, 11000)')
        .pause(2000)
        .waitForElementVisible(faqTitle)
        .click(faqTitle)
        .pause(2000);

        // browser
        // .url('https://www.oneyoungworld.com/scholarships')
        // .pause(2000)
        // .waitForElementVisible(gdprbtn)
        // .click(gdprbtn)
        // .execute('scrollTo(500, 11000)')
        // .pause(2000)
        // .waitForElementVisible(faqTitle)
        // .click(faqTitle)
        // .pause(2000)
    }
    
}