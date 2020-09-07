
//it is mandatory when you run 'cucumber framework' 
//it sets timing when applicaiton loading to make sure you have time to see if applicaiton failes
//protractor has this knowledge, but working with 'cucumber' it might get confused
//also it should be in 'cucumberconf.ts' as well
var{setDefaultTimeout}=require('cucumber');
setDefaultTimeout(60*1000);