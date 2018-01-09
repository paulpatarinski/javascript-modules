//Inject module 2 in
var module1 = (function (mod2) {
 //Private variable
 var counter = 0;
 function privateFunc() {
  console.log('Private function called');
 }

 return {
  //Public
  helloUniverse: function () {
   console.log('Hello from Module 1');
  },
  helloModule2: function () {
   mod2.hello();
  }
 };
})(module2);