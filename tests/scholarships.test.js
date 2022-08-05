module.exports = {
    "User can navigate to scholarships page and open faq accordion": function (browser) {

        var scholarship = browser.page.scholarships();

        // const gdprbtn = '#gdpr-agree';
        const faqTitle = '#accordion > div';

        scholarship.navigate()
        // .waitForElementVisible('@gdprbtn')
        // .click('@gdprbtn');

        // scholarship.execute cannot be run because the execute method exists within scholarship.api property. 
        // Use dev tools to print out the page obj and drill down into its keys / values.

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