"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculator_1 = require("./pageObjec/calculator");
const angularHome_1 = require("./pageObjec/angularHome");
describe("Chain Locators Demo", function () {
    protractor_1.browser.waitForAngularEnabled(false);
    let calc = new calculator_1.calculator();
    let ah = new angularHome_1.angularHome();
    it("Locators", async () => {
        await protractor_1.browser.waitForAngularEnabled(false);
        await protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        await calc.firstEditBox.sendKeys("3");
        await calc.secondEditBox.sendKeys("5");
        await calc.go.click();
        await protractor_1.browser.sleep(2000);
        calc.getResult.getText().then(function (text) {
            console.log(text);
        });
    });
    it('Angular Home Page title verification', async () => {
        await protractor_1.browser.get("https://angularjs.org/");
        await ah.angularLink.click();
        await protractor_1.browser.sleep(3000);
        await ah.search.sendKeys("hello");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBOEM7QUFDOUMsdURBQW9EO0FBQ3BELHlEQUFzRDtBQUV0RCxRQUFRLENBQUMscUJBQXFCLEVBQUM7SUFDM0Isb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztJQUM1QixJQUFJLEVBQUUsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztJQUkzQixFQUFFLENBQUMsVUFBVSxFQUFDLEtBQUssSUFBRSxFQUFFO1FBQ25CLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFDaEUsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5CLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFHVCxFQUFFLENBQUMsc0NBQXNDLEVBQUMsS0FBSyxJQUFFLEVBQUU7UUFHL0MsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFdEMsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyJ9