//it is mandatory when you run 'cucumber framework' 
//it sets timing when applicaiton loading to make sure you have time to see if applicaiton failes
//protractor has this knowledge, but working with 'cucumber' it might get confused
//also it should be in 'cucumberconf.ts' as well
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZW91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbnRpb25zL3RpbWVvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0Esb0RBQW9EO0FBQ3BELGlHQUFpRztBQUNqRyxrRkFBa0Y7QUFDbEYsZ0RBQWdEO0FBQ2hELElBQUcsRUFBQyxpQkFBaUIsRUFBQyxHQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMzQyxpQkFBaUIsQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLENBQUMifQ==