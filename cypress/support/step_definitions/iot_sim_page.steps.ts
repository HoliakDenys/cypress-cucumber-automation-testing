import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import IotSimPage from "../../pages/iot.sim.page";

const iotSimPage = new IotSimPage();

Given('I open the IoT SIM page', () => {
    iotSimPage.open();
});

When('the user changes the language to Japanese', () => {
    iotSimPage.selectJapaneseLanguage();
});

When('the user changes the language to Korean', () => {
    iotSimPage.selectKoreanLanguage();
});

When('I click on the {string} button', (faqButton: string) => {
    iotSimPage.getQuestion(faqButton).click();
});

Then('the language should be changed to Japanese', () => {
    iotSimPage.checkJapanese();
});

Then('the language should be changed to Korean', () => {
    iotSimPage.checkKorean();
});

Then('the language should be English by default', () => {
    iotSimPage.checkEnglish();
});

Then('the answer for {string} should expand', (faqButton: string) => {
    iotSimPage.checkQuestionState(faqButton, 'open', 'true');
});

Then('the answer for {string} should collapse', (faqButton: string) => {
    iotSimPage.checkQuestionState(faqButton, 'closed', 'false');
});