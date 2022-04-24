"use strict";
var TimeOfDay;
(function (TimeOfDay) {
    TimeOfDay["morning"] = "Good morning";
    TimeOfDay["afternoon"] = "Good afternoon";
    TimeOfDay["evening"] = "Good evening";
})(TimeOfDay || (TimeOfDay = {}));
const gabriel = {
    name: "Gabriel",
    loyaltyProgram: true,
    visited: 2
};
const greeting = (time_of_day, Customer) => {
    const loyal = "thank you for being a valued customer!";
    const notLoyal = "thank you";
    let greeting = '${time_of_day} ${customer.name}!';
    greeting += Customer.loyaltyProgram ? loyal : notLoyal;
    return greeting;
};
console.log(greeting(TimeOfDay.morning, gabriel));
