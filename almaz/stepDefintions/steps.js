"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageObjec/calculator");
const protractor_1 = require("protractor");
const angularHome_1 = require("../pageObjec/angularHome");
const chai_1 = __importDefault(require("chai")); //importing 'chai' manually
var expect = chai_1.default.expect;
let calc = new calculator_1.calculator();
let ah = new angularHome_1.angularHome();
cucumber_1.Given('I will navigate to Calc Site', async () => {
    // Write code here that turns the phrase above into concrete actions
    await protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
});
cucumber_1.Given('I will navigate to {string} page', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    if (string == "calc") {
        await protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "AngularJs") {
        await protractor_1.browser.get("https://angularjs.org/");
    }
});
cucumber_1.When('I clicked on header link', async () => {
    // Write code here that turns the phrase above into concrete actions
    await ah.angularLink.click();
});
cucumber_1.When('you will navigate to angular page', async () => {
    // Write code here that turns the phrase above into concrete actions
    console.log("navigated to new page");
});
cucumber_1.Then('you will enter {string} in search box', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    await protractor_1.browser.sleep(3000);
    await ah.search.sendKeys(string);
});
cucumber_1.When('I add two numbers {string} and {string}', async (string, string2) => {
    // Write code here that turns the phrase above into concrete actions
    await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
});
cucumber_1.Then('the output displayed should be {string}', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    await calc.go.click();
    await calc.getResult.getText().then(function (text) {
        expect(text).to.equal(string);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW50aW9ucy9zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHVDQUE2QztBQUM3Qyx3REFBcUQ7QUFDckQsMkNBQXFDO0FBQ3JDLDBEQUF1RDtBQUN2RCxnREFBd0IsQ0FBQywyQkFBMkI7QUFDcEQsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUM1QixJQUFJLEVBQUUsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUNsQixnQkFBSyxDQUFDLDhCQUE4QixFQUFFLEtBQUssSUFBRyxFQUFFO0lBQzdDLG9FQUFvRTtJQUNwRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFFakUsQ0FBQyxDQUFDLENBQUM7QUFDSCxnQkFBSyxDQUFDLGtDQUFrQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsRUFBRTtJQUN4RCxvRUFBb0U7SUFDdEUsSUFBRyxNQUFNLElBQUUsTUFBTSxFQUNqQjtRQUNFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztLQUNoRTtTQUNJLElBQUksTUFBTSxJQUFFLFdBQVcsRUFDNUI7UUFDRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDN0M7QUFFRCxDQUFDLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywwQkFBMEIsRUFBRSxLQUFLLElBQUcsRUFBRTtJQUN6QyxvRUFBb0U7SUFFcEUsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQy9CLENBQUMsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLG1DQUFtQyxFQUFFLEtBQUssSUFBRyxFQUFFO0lBQ2xELG9FQUFvRTtJQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsdUNBQXVDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxFQUFFO0lBQzVELG9FQUFvRTtJQUNwRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseUNBQXlDLEVBQUcsS0FBSyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUN4RSxvRUFBb0U7SUFHcEUsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBR1gsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUN2RCxvRUFBb0U7SUFDcEUsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1FBRTdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFDLENBQUMifQ==