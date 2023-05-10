const Employee = require('./employee');

const johnW = new Employee('John Wick', 'Dog Lover');
setTimeout(johnW.sayName, 2000); //prints 'Undefined says hello' after 2 secs
// setTimeout(johnW.sayName(), 2000); //TypeError callback must be a function.  Received undefined.
setTimeout(johnW.sayName.bind(johnW), 2000); //prints 'John Wick says hello' after 2 secs;


setTimeout(johnW.sayOccupation, 3000); //prints 'Undefined is a undefined' after 3 secs
// setTimeout(johnW.sayOccupation(), 3000); //TypeError callback must be a function.  Received undefined.
setTimeout(johnW.sayOccupation.bind(johnW), 3000); //prints 'John Wick is a Dog Lover' after 3 secs;
