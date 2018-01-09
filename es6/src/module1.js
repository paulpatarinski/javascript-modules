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