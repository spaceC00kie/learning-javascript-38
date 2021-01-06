//object oriented programming

//constructor function should have a captalized name
function Person(firstName, lastName, dob) {
  this.firstName = firstName
  this.lastName = lastName
  this.dob = dob
}

//instantiate an object
const person1 = new Person("Stewie", "Griffin", "01-02-1990")
const person2 = new Person("Luke", "Skywalker", "a-long-time-ago-in-a-galaxy-far-away")

console.log(person1)
console.log(person2.lastName)
