var module2 = (() => {
 return {
  //Public
  hello: () => {
   console.log('Hello from Module 2');
  }
 };
})();
//Inject module 2 in
var module1 = ((mod2) => {
 //Private variable
 var counter = 0;
 const privateFunc = () => {
  console.log('Private function called');
 }

 return {
  //Public
  helloUniverse: () => console.log('Hello from Module 1'),

  helloModule2: () => mod2.hello()
 };
})(module2);
//Call public func...Using the TestModule
module1.helloUniverse();

//Module1 calling Module2
module1.helloModule2();

//Try to call the private func to prove the module worked..should throw undefined
module1.privateFunc();