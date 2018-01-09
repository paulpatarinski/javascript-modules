import mod1 from './module1.js';

// Call public func...Using the TestModule
mod1.helloUniverse();

//Module1 calling Module2
mod1.helloModule2();

//Try to call the private func to prove the module worked..should throw undefined
mod1.privateFunc();