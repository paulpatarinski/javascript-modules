var module2 = (function () {
 return {
  //Public
  hello: function () {
   console.log('Hello from Module 2');
  }
 };
})();
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
//Call public func...Using the TestModule
module1.helloUniverse();

//Module1 calling Module2
module1.helloModule2();

//Try to call the private func to prove the module worked..should throw undefined
module1.privateFunc();