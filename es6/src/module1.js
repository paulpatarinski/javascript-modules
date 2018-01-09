import mod2 from "./module2.js";

//Inject module 2 in
const Module1 = {
  //Public
  helloUniverse() {

    var test = () => {

    };
    console.log('Hello from Module 1');
  },
  helloModule2() {
    mod2.hello();
  }
};

export default Module1;