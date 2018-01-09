var testModule = (function () {
 //Private variable
 var counter = 0;
 function privateFunc() {
  console.log('Private function called');
 }

 return {
  //Public
  helloUniverse: function () {
   console.log('Hello Universe');
  }
 };
})();