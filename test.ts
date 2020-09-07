
import {element,by,browser} from 'protractor';
import { calculator } from './pageObjec/calculator';
import { angularHome } from './pageObjec/angularHome';

describe("Chain Locators Demo",function(){
    browser.waitForAngularEnabled(false);
    let calc = new calculator();
    let ah = new angularHome();

    
    
    it("Locators",async()=>{
        await browser.waitForAngularEnabled(false);

        //Given I will navigate to Calc Site
        await browser.get("https://juliemr.github.io/protractor-demo/");

        //When I add two numbers "3" and "5"
        await calc.firstEditBox.sendKeys("3");
        await calc.secondEditBox.sendKeys("5");
        
       // Then the output displayed should be "8"
        await calc.go.click();
        await browser.sleep(2000);
        calc.getResult.getText().then(function(text){
            console.log(text);
      
           });
          });


    it('Angular Home Page title verification',async()=>{
        
       
        await browser.get("https://angularjs.org/");
        await ah.angularLink.click();
        await browser.sleep(3000);
        await ah.search.sendKeys("hello");
        
        
    })
});