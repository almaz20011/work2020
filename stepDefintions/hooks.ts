import { Before, After, Status } from "cucumber";
import { browser } from "protractor";



Before({tags: "@calculatortesting"},function(){
    //this hook will be executed before scenarios tagged wiht @foo
    browser.manage().window().maximize();
});

After({tags: "@calculatortesting"},function(){
    //this hook will be executed before scenarios tagged wiht @foo
   console.log("Test is completed");
});

Before({tags: "@AngularTesting"},function(){
    //this hook will be executed before scenarios tagged wiht @foo
    console.log(" I need to execute first");
});

After(async function(scenario) {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test is completed");
    if (scenario.result.status=== Status.FAILED)
    {
      //code to take screesnhot
     const screenshot= await browser.takeScreenshot();
   
          this.attach(screenshot,"image/png");
    }
  
  
  });