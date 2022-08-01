module.exports = {
    "User can navigate to peace ambassadors page and open a speaker headshot modal": function (browser) {
        var peaceAmbassador = browser.page.peaceAmbassadors();

        peaceAmbassador.navigate()
        .waitForElementVisible('@firstAmbassador')
        .click('@firstAmbassador')
        .pause(2000)
        .waitForElementVisible('@modalActivePanel')
        .click('@closeMeBtnModal')
        .pause(2000);
        
    }
    
}