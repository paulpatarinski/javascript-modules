//Call public func...Using the TestModule
module1.helloUniverse();

//Module1 calling Module2
module1.helloModule2();

//Try to call the private func to prove the module worked..should throw undefined
module1.privateFunc();