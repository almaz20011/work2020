"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "@calculatortesting" }, function () {
    //this hook will be executed before scenarios tagged wiht @foo
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.After({ tags: "@calculatortesting" }, function () {
    //this hook will be executed before scenarios tagged wiht @foo
    console.log("Test is completed");
});
cucumber_1.Before({ tags: "@AngularTesting" }, function () {
    //this hook will be executed before scenarios tagged wiht @foo
    console.log(" I need to execute first");
});
cucumber_1.After(async function (scenario) {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test is completed");
    if (scenario.result.status === cucumber_1.Status.FAILED) {
        //code to take screesnhot
        const screenshot = await protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW50aW9ucy9ob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFpRDtBQUNqRCwyQ0FBcUM7QUFJckMsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBQyxFQUFDO0lBQ2hDLDhEQUE4RDtJQUM5RCxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3pDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBQyxFQUFDO0lBQy9CLDhEQUE4RDtJQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFDLEVBQUM7SUFDN0IsOERBQThEO0lBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsS0FBSyxXQUFVLFFBQVE7SUFDekIsK0RBQStEO0lBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNqQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFJLGlCQUFNLENBQUMsTUFBTSxFQUMzQztRQUNFLHlCQUF5QjtRQUMxQixNQUFNLFVBQVUsR0FBRSxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUMsV0FBVyxDQUFDLENBQUM7S0FDekM7QUFHSCxDQUFDLENBQUMsQ0FBQyJ9