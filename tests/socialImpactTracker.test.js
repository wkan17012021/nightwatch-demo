module.exports = {
    "User can navigate to social impact tracker page and open first modal": function (browser) {
        var impactTrackerPage = browser.page.socialImpactTracker();

        impactTrackerPage.navigate()
        .pause(2000)
        .waitForElementVisible('@gdprBtn')
        .click('@gdprBtn')
        .waitForElementVisible('@firstProjCard')
        .click('@firstProjCard')
        .pause(3000);
    }
    
}